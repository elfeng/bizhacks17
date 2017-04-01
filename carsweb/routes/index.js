var express = require('express');
var router = express.Router();
//link the user schema to route
var User = require('../lib/User');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//register user
router.post('/register', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;

  var newuser = new User();
  newuser.username = username;
  newuser.password = password;
  newuser.firstname = firstname;
  newuser.lastname = lastname;
  newuser.save(function (err,savedUser) {
    if(err){
      console.log(err);
      res.render('error');
      return res.status(500).send();
    }
    res.render('register', {user: {}, action: '/'});
    return res.status(200).send();
  })
});


// login
router.get('/login', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username, password: password}, function (err, user) {
    if (err){
      console.log(err);
      return res.status(500).send;
    }

    if(!user){
      return res.status(404).send();
    }

    return res.status(200).send();
  })
});


module.exports = router;
