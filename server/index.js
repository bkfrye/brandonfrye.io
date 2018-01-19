const express = require('express')
const path = require('path')
const app = express()
const robots = require('express-robots')

app.use(express.static(path.join(__dirname, '..', 'build')))
app.use(robots({ UserAgent: '*', Disallow: '/viget' }))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
