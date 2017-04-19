var db = require('../databases/collections/db');
var express = require('express');
var router = express.Router();

var projects = db.items;

router.get('/main', function(req, res) {
    res.render('main', {
        projects
    })
});