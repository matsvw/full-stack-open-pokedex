const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  if (req.query.error === 'true') {
    return res.status(500).send('healthcheck error triggered')
  }
  res.send('ok')
})

app.use(express.static('dist'))

// React Router fallback
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
