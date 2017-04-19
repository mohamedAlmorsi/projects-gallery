var mongoose = require('mongoose');
var express = require('express');
var db = require('./databases/collections/db');
var student = require('./Back_End/student');
//let Project = require('../models/');
var router = express.Router();
//var items = ["https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/16507966_619894411537129_8474989539214489466_n.jpg?oh=e1977ff9cb1a0089aa9a8b1085034e84&oe=593D888F",
//"https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/16508093_619893961537174_2310415520080720298_n.jpg?oh=3485ef403c6aee8441c34364b4f1764b&oe=593385B4", "https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/16508081_619894404870463_5573950021134998412_n.jpg?oh=fc68262805ba1f3567be9f0472d78f66&oe=5933A823"
//];



getItems = function(req, res) {
    db.item.find(function(err, items) {
        if (err)
            res.send(err.message);
        else {


            //console.log(items[1].ownerMail);
            var mails = [];
            var pics = [];

            for (var i = 0; i < items.length; i++) {
                mails[i] = items[i].ownerMail;
            }
            //console.log(mails[1]);
            for (var i = 0; i < mails.length; i++) {
                db.student.findOne({ 'email': mails[i] }, function(err, om) {
                    //console.log(om.profilePicture);
                    pics = pics.concat(om.profilePicture);
                    //console.log(pics);
                    //  console.log("in the loop" + " " + pics[i]);
                    //console.log("om in the loop" + " " + om.profilePicture);


                });
            }
            //  console.log(mails);
            console.log("out of the loop" + " " + pics + "ends here");
            // console.log("[1]" + " " + pics[1]);
            res.render('main', { mails, items });
        }
    });

}

router.get('/home', function(req, res) {
    res.render('home');

});
router.get('/about', function(req, res) {
    res.render('about');
});
/*router.get('/main',function(req ,res){
    res.render('main');
});*/
router.get('/registerStudent', function(req, res) {
    res.render('registerStudent');
});
router.get('/registerVisitor', function(req, res) {
    res.render('registerVisitor');
});

router.get('/main', function(req, res) {

    getItems(req, res);
});


router.post('/studentItems', function(req, res) {
    var Item = db.item;
    let Student = db.student;
    var mail = req.body.email;
    console.log("user mail" + mail);
    console.log("sss");
    var one;
    var profilePicture = "";
    var e = "x";
    if (mail == null) {
        res.send("ERROR in MAIL");
    } else {
        db.student.findOne({ 'email': mail, 'password': req.body.password }, function(err, one) {
            if (one == null)
                res.send("WRONG USERNAME OR PASSWORD");
            else {
                profilePicture = one.profilePicture;
                e = one.email;
                Item.find({ ownerMail: mail }, function(err, items) {
                    if (mail == null) res.send("ERROR IN MAIL");
                    else {
                        res.render('mainStudent', { items, profilePicture });
                        console.log("mail :" + mail + " " + "email " + e + " profilePicture : " + profilePicture);
                    }
                });
            }
        })


    }
});

router.get('/makeProject', function(req, res) {
    res.render('makeProject');
});


router.post('/login', function(req, res) {
    let Student = db.student;
    var x = req.body;
    var mail = x.email;
    var pass = x.password;
    console.log(mail);
    console.log(pass);
    var person = (Student.findOne({ email: mail, password: pass }));
    console.log(person.email);
    /*  if (person.email == undefined) {
          res.send("Wrong username or password");
          console.log("errrrooorororo")
      } else {
          res.render('makeProject', { email });
          console.log("Found" + " " + x.email + " " + x.password);
          console.log(person.email);
      }*/

    Student.findOne({ 'email': mail, 'password': pass }, function(err, st) {
        if (st == null) {
            res.send("Wrong username or password");
            console.log("error in data");
        } else {
            res.render('makeProject', { mail });
            console.log(mail);
        }
    });
});


router.post('/studentSignUp', function(req, res) {
    var Student = db.student;
    var x = req.body;
    var mail = x.mail;
    var stu = new Student({ 'first_name': x.fname, 'last_name': x.lname, 'email': x.mail, 'password': x.pass, 'profilePicture': x.profilePicture });
    console.log(stu);
    stu.save(function(err, st) {
        if (err) {
            res.send(err.message);
            // console.log(err);
        } else {
            res.render('makeProject.ejs', { mail });
        }
    });
});

router.post('/studentMakeProject', function(req, res) {
    var Item = db.item;
    var x = req.body;
    var i = new Item({
        'ownerMail': x.email,
        'image': x.image,
        'description': x.description,
        'link': x.link,
        'code': x.code
    });
    i.save(function(err, it) {
        if (err) {
            res.send(err.message);
        } else {
            res.send("Project Posted")
        }
    });
});

module.exports = router;