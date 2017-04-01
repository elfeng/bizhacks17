/**
 * Created by jimmy on 2017-03-19.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carwebuser');

//construct the user schema
var userSchema = new mongoose.Schema({
    username : {type: String, unique: true},
    password : {type: String},
    firstname: String,
    lastname : String
});

var User = mongoose.model('myuser', userSchema);
module.exports= User;

