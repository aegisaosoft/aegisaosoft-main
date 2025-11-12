const path = require('path')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080
const publicDir = path.join(__dirname, 'public')
const indexFile = path.join(publicDir, 'index.html')

app.use(cors())
app.use(express.json())

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

// Serve static files from React build
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir, { fallthrough: true }))
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

// Catch-all route for React Router - serve index.html for all non-API routes
// This must be AFTER all other routes
app.use((req, res, next) => {
  // If we've reached here and it's not an API route, serve the React app
  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile)
  }
  
  // If index.html doesn't exist, return 404
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found.`,
  })
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
  console.log('='.repeat(50))
  console.log('✅ AEGIS AO SOFT SERVER STARTED SUCCESSFULLY')
  console.log('='.repeat(50))
  console.log(`🌐 Port: ${PORT}`)
  console.log(`📁 Public Directory: ${publicDir}`)
  console.log(`📄 Index File Exists: ${fs.existsSync(indexFile)}`)
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`📅 Started at: ${new Date().toISOString()}`)
  console.log('='.repeat(50))
  
  // List files in public directory
  if (fs.existsSync(publicDir)) {
    console.log('\n📂 Files in public directory:')
    try {
      const files = fs.readdirSync(publicDir)
      files.forEach(file => console.log(`  - ${file}`))
    } catch (err) {
      console.error('Error reading public directory:', err)
    }
  } else {
    console.error('❌ WARNING: Public directory does not exist!')
  }
  console.log('')
})
