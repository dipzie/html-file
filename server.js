const express = require('express')
const path = require('path')
const app = express()

app.get('/hello', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, () => {
  console.log('server is running on port 3000')
})
