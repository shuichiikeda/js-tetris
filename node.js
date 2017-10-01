/*
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/',function(req, res){
    var obj = {};
    console.log('body: ' + JSON.stringify(req.body.name));
    var rejson = JSON.stringify(req.body);
    res.send(rejson);
});

app.listen(8124);
    */

app = require('express')();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);
