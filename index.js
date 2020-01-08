// Require Express
const express = require('express')

// Setup app and port
const app = express()
const port = 8080

// Setup static files
app.use(express.static('public'))

// Serve Home
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/html/index.html')
})

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/html/404.html')
})

// Listen to port for requests
app.listen(port, () => console.log(`Website listening on port ${port}!`))