const express = require('express')
const bodyParser = require('body-parser');
const my_model = require('./model/my_model');
const app = express()
const port = 3000

app.use(bodyParser.json());     // to support JSON-encoded
	app.use(bodyParser.urlencoded({  // to support URL-encoded
    		extended: true
	}));


app.get('/', (req, res) => {
    res.send(my_model.m_ac_bank.getAll())
})

app.get('/user', function (req, res) {
    res.send('Got a Get user')
})

app.get('/user/:userID/book/:bookID', function (req, res) {
    console.log("userID = " + req.param("userID"));
    console.log("bookID = " + req.param("bookID"));
    res.send(req.params)
})

app.post('/', function (req, res) {
    res.send('Got a Post request')
})

app.post('/user', function (req, res) {
    // req.body =>  this->input->post
    res.send(req.body.name)
})

app.put('/user', function (req, res) {
    res.send('Got a Put request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a Delete request at /user')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})