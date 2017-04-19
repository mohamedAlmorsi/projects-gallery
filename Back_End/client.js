var db = require('./databases/collections/db');


signup = function(req, res) {
    var visitor = req.body;
    db.client.save({
        email: visitor.mail,
        first_name: visitor.first_name,
        last_name: visitor.last_name,
        password: visitor.password
    })
}

login = function(req, res) {
    var v = req.body;
    db.client.findone({ 'email': v.mail, 'password': v.password }, function(err, student) {
        if (err) res.send(err.message);
        else res.send("logged");


    })
}


var collection = { login, signup };
module.exports = collection;