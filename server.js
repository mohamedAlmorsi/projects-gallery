var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var index = require('./routes');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
//app.set('view engine', 'ejs');
//app.set('views', '/views');
app.use(index);

mongoose.connect("mongodb://localhost:27017/mini", function(err, db) {
    if (!err) {
        console.log("We're Connected");
    } else {
        console.log("There is an Error");
    }
});

//app.set('views', path.join(__dirname, 'views'));
//app.set('styles',path.join(__dirname,'styles'))+'/public/styles/home.css';
//app.use('/', index);

app.listen(8080, function() {
    console.log('Server started in 8080');
});


/*
app.post('/studentSignUp', function(req, res) {
    // req.body object has your form values
    res.send("hii");
});*/