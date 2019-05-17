var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');

var payload = { foo: 'kasa' };
var secret = 'XwdKtoBAV9fwBfFKCZCmTyCW';

// encode
var token = jwt.encode(payload, secret);

// decode
var decoded = jwt.decode(token, secret);
console.log(decoded); //=> { foo: 'bar' }

var encodedJWT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJrYXNhIn0.O5sEbGHFbQ4ahl9jLfHkm-UkczGz55WsO9ZmG4h8NcA";
var secret = "XwdKtoBAV9fwBfFKCZCmTyCW";
var decodedJWT = jwt.decode(encodedJWT, secret);




router.get('/', function(req, res, next) {
  
res.render('index', { title: JSON.stringify(token) +"|deco|"+ JSON.stringify(decodedJWT)+
      "||"+JSON.stringify(payload) });
});


module.exports = router;
