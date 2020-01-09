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

app.get('/projects', (req, res) => {
	res.sendFile(__dirname + '/html/projects.html')
})

app.get('/projects/*', (req, res) => {
	var p_name = req.url.toString()
	p_name = p_name.substr(10, p_name.length - 10);
	res.send("🎉 Project " + p_name + " Coming Soon 🎉")
})

app.get('/resume', (req, res) => {
	res.sendFile(__dirname + '/html/resume.html')
})

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/html/404.html')
})

// Listen to port for requests
app.listen(port, () => console.log(`Website listening on port ${port}!`))