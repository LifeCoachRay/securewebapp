const express = require('express')
const https = require('https')
const app = express()

app.get('/', (req, res) => {
  const url = req.query.url
  if (!url) {
    return res.status(400).json({ error: 'Please provide a URL as a query parameter (e.g., "?url=example.com")' })
  }

  https.get(url, (response) => {
    res.json({
      url: url,
      isSecure: response.socket.encrypted
    })
  }).on('error', (error) => {
    res.status(500).json({ error: error.message })
  })
})

app.listen(7000, () => {
  console.log('Server listening on port 7000')
})
