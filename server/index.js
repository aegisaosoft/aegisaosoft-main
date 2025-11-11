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

app.use(cors())
app.use(express.json())

if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir, { fallthrough: true }))
}

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

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next()
  }

  if (fs.existsSync(indexFile)) {
    return res.sendFile(indexFile)
  }

  return next()
})

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found.`,
  })
})

app.use((error, _req, res, _next) => {
  console.error('Unexpected server error:', error)
  res.status(500).json({
    status: 'error',
    message: 'An unexpected error occurred. Please try again later.',
  })
})

app.listen(PORT, () => {
  console.log(`Aegis AO Soft server running on port ${PORT}`)
})

