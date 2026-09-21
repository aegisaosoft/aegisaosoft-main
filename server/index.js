const path = require('path')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const publicDir = path.join(__dirname, 'public')
const indexFile = path.join(publicDir, 'index.html')

/*
 * The addresses this site has, and the ones it only pretends to have.
 *
 * Deployed beside the build (the workflow copies client/src/seo/pages.json into public/), so
 * the server, the app and the sitemap cannot disagree about what a page is. If the file is
 * missing the server keeps working exactly as it did before — every path gets the shell.
 */
const seoFile = path.join(publicDir, 'pages.json')
const seo = fs.existsSync(seoFile)
  ? JSON.parse(fs.readFileSync(seoFile, 'utf8'))
  : { pages: [], redirects: {} }
const KNOWN_PATHS = new Set(seo.pages.map((page) => page.path))
const REDIRECTS = seo.redirects || {}

// Express trusts X-Forwarded-* behind Azure's front end, which is how req.hostname is the
// name the visitor typed rather than the container's.
app.set('trust proxy', 1)

/*
 * One site, one hostname.
 *
 * Both aegisaosoft.com and www.aegisaosoft.com answered 200 with byte-identical HTML, and
 * neither said which of them was the page. Search Console's verdict was the predictable one —
 * "the page is a duplicate, no canonical was declared by the user" — and the home page went
 * unindexed. Every other hostname now redirects here instead of serving a copy. localhost is
 * the dev server and the tests; *.azurewebsites.net is how Azure's health probes and the
 * deployment tooling reach the app, so it keeps serving, marked not to be indexed.
 */
const CANONICAL_HOST = (process.env.CANONICAL_HOST || 'aegisaosoft.com').toLowerCase()
const isLocalHost = (host) =>
  host === '' || host === 'localhost' || host === '127.0.0.1' || host === '[::1]'

app.use((req, res, next) => {
  const host = (req.hostname || '').toLowerCase()
  if (host === CANONICAL_HOST || isLocalHost(host)) return next()
  if (host.endsWith('.azurewebsites.net')) {
    res.set('X-Robots-Tag', 'noindex')
    return next()
  }
  // Only what a crawler follows is redirected: a 301 would strip the body of the contact
  // form's POST, and nothing indexes one.
  if (req.method !== 'GET' && req.method !== 'HEAD') return next()
  return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`)
})

/*
 * The addresses the router answers with <Navigate>. To a visitor that is a redirect; to a
 * crawler it is a second address returning the same page, which is how a site accumulates
 * duplicates of itself. Answered here, before the app ever loads.
 */
for (const [from, to] of Object.entries(REDIRECTS)) {
  app.get(from, (_req, res) => res.redirect(301, to))
}

app.use(cors())
app.use(express.json())

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

/*
 * Serve static files from the build.
 *
 * index:false and redirect:false leave a directory request to the catch-all below, which
 * answers /about with the snapshot itself. Without redirect:false, serve-static replies 301
 * /about/ — and /about, the address the canonical tag and the sitemap name, must not redirect
 * to a different one.
 */
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir, { fallthrough: true, index: false, redirect: false }))
}

// API Routes
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Aegis AO Soft API',
    timestamp: new Date().toISOString(),
  })
})

app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({
      status: 'error',
      message: 'Name, email, and message are required.',
    })
  }

  console.log('New contact inquiry received:', {
    name,
    email,
    company: company ?? 'N/A',
    message,
    receivedAt: new Date().toISOString(),
  })

  return res.status(200).json({
    status: 'success',
    message: 'Inquiry received. Our team will respond shortly.',
  })
})

/*
 * Catch-all for React Router — after every other route.
 *
 * Two things it does that the plain `sendFile(indexFile)` it replaced did not:
 *
 * 1. Serves the snapshot scripts/prerender.js wrote for this address, if there is one, so a
 *    crawler that runs no JavaScript is handed the rendered page instead of an empty shell.
 *
 * 2. Answers 404 for an address that is not a page. Serving the shell with a 200 for anything
 *    at all is a soft 404: every guessed path becomes another copy of the home page in the
 *    index, and a crawler can mint them indefinitely. The body is still the app — a visitor
 *    who mistyped sees the site, not a bare error — with the robots tag inverted so a crawler
 *    that ignores the status code is told the same thing twice.
 */
app.use((req, res) => {
  if (!fs.existsSync(indexFile)) {
    return res.status(404).json({
      status: 'error',
      message: `Route ${req.originalUrl} not found.`,
    })
  }

  const isPage = KNOWN_PATHS.size === 0 || KNOWN_PATHS.has(req.path)

  if (isPage) {
    const snapshot = path.join(publicDir, req.path, 'index.html')
    if (snapshot.startsWith(publicDir) && fs.existsSync(snapshot)) {
      return res.sendFile(snapshot)
    }
    return res.sendFile(indexFile)
  }

  // The built shell carries extra attributes on the tag, so match the element rather than the
  // exact spelling index.html happens to use.
  const shell = fs
    .readFileSync(indexFile, 'utf8')
    .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')
  return res.status(404).type('html').send(shell)
})

// Error handler
app.use((error, _req, res, _next) => {
  console.error('Unexpected server error:', error)
  res.status(500).json({
    status: 'error',
    message: 'An unexpected error occurred. Please try again later.',
  })
})

app.listen(PORT, () => {
  const isDevelopment = (process.env.NODE_ENV || 'development') === 'development'
  const publicDirExists = fs.existsSync(publicDir)
  
  console.log('='.repeat(50))
  console.log('✅ AEGIS AO SOFT SERVER STARTED SUCCESSFULLY')
  console.log('='.repeat(50))
  console.log(`🌐 Port: ${PORT}`)
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`📅 Started at: ${new Date().toISOString()}`)
  
  if (isDevelopment) {
    console.log('\n💡 Development Mode:')
    console.log('   - Client runs separately on http://localhost:3000 (Vite)')
    console.log('   - Server provides API endpoints on http://localhost:5000')
    console.log('   - Public directory not required in development')
  } else {
    console.log(`\n📁 Public Directory: ${publicDir}`)
    console.log(`📄 Index File Exists: ${fs.existsSync(indexFile)}`)
    
    if (publicDirExists) {
      console.log('\n📂 Files in public directory:')
      try {
        const files = fs.readdirSync(publicDir)
        files.forEach(file => console.log(`  - ${file}`))
      } catch (err) {
        console.error('Error reading public directory:', err)
      }
    } else {
      console.error('\n❌ WARNING: Public directory does not exist!')
      console.error('   Build the client first: cd client && npm run build')
      console.error('   Then copy dist/ to server/public/')
    }
  }
  
  console.log('='.repeat(50))
  console.log('')
})
