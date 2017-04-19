var mongoose = require('mongoose');
var express = require('express');
var db = require('../databases/collections/db');


//let Project = require('../models/');
//var items = ["https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/16507966_619894411537129_8474989539214489466_n.jpg?oh=e1977ff9cb1a0089aa9a8b1085034e84&oe=593D888F",
//"https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/16508093_619893961537174_2310415520080720298_n.jpg?oh=3485ef403c6aee8441c34364b4f1764b&oe=593385B4", "https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/16508081_619894404870463_5573950021134998412_n.jpg?oh=fc68262805ba1f3567be9f0472d78f66&oe=5933A823"
//];



exports.getItems = function(req, res) {
    var mail = req.email;
    var items = db.item.find({ 'ownerMail': mail });
    res.render('main', { items });


}
exports.signup = function(req, res) {

    res.send("hello");
};

/*
exports.signup = function(req, res) {
    let Student = db.student;
    let st = new Student(req.body);
    st.save(function(err, st) {
        if (err) {
            res.send(err.message);
            console.log(err);
        } else {
            res.render('makeProject', {req.body.username});
        }
    })
}*/


exports.login = function(req, res) {
    let Student = db.student;
    // let st = new Student(req.body);
    Student.findOne({ 'email': req.body.email, 'password': req.body.password }, function(err, st) {
        if (err) {
            res.send(err.message);
        } else {
            res.render('makeProject', req.body.email);
        }
    });
};
/*
student.findone({ 'gucMail': gucMail, 'password': password }, function(err, student) {
            if (err) res.send(err.message);
            else res.send("login sucessful");
*/

//var exported = { login, signup };
//module.exports = exported;