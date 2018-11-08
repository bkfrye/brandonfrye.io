const express = require('express')
const path = require('path')
const app = express()
const robots = require('express-robots')

app.use(require('prerender-node').set('prerenderToken', '2J9WnuZJZYnaCOL4flB0'));
app.use(express.static(path.join(__dirname, '..', 'build')))
app.use(robots({ UserAgent: '*', Disallow: '' }))


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

app.get('/resume', function(reg, res) {
	res.sendFile(path.join(__dirname, '..', 'build', 'resume.html'));
})

app.listen(process.env.PORT || 5000)

console.log('Listening on PORT:5000')
