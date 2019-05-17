var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');


router.get('/', function(req, res, next) {
  
var payload = { foo: 'adios' };
var secret = 'XwdKtoBAV9fwBfFKCZCmTyCW';

// HS256 secrets are typically 128-bit random strings, for example hex-encoded:
// var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex')

// encode
var token = jwt.encode(payload, secret);

// decode
var decoded = jwt.decode(token, secret);
console.log(decoded); //=> { foo: 'bar' }

res.render('index', { title: JSON.stringify(token) +"||"+ JSON.stringify(decoded)+
      "||"+JSON.stringify(payload) });
});


module.exports = router;
