var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    }
}, { collection: "student" });

var clientSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
}, { collection: "client" });

var itemSchema = new mongoose.Schema({
    ownerMail: {
        type: String,
        required: true,
    },
    image: String,
    title: String,
    description: String,
    link: String,
    code: String
}, { collection: "item" });

var student = mongoose.model("student", studentSchema);
var client = mongoose.model("client", clientSchema);
var item = mongoose.model("item", itemSchema);

var collections = { student, client, item };
module.exports = collections;