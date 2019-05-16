var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

//-----------------------------------

var jwt = require('jwt-simple');
var payload = { foo: 'bar' };
var secret = 'Vd6bbw3Gi7eA9Hn3mw4m1NCBP9ksNYXkReWRKA-EagAvJVQR0_TARCPUjEGH1zCefngx8QBKM02iUs3zRlQYnWovONFINzDvQ49OKXK96y_PXhe6P5Eob_0LTpj5pjhjY74vX-ZpOgqeYVPXVfC64br2R7IxC9hCWvlZnWFUWqPetB9u1kryDotMd6vdtzasllsHSLQwOZU3BlJ0l5qPEquw0yJMXgDGt4Qd5J-ld83OPSkKwjmlwi75StXvEg2';

// HS256 secrets are typically 128-bit random strings, for example hex-encoded:
// var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex')

// encode
var token = jwt.encode(payload, secret);

// decode
var decoded = jwt.decode(token, secret);
console.log(decoded); //=> { foo: 'bar' }

//'Esto es una prueba'
//----------------------------------
  res.render('index', { title: JSON.stringify(token) +"||"+ JSON.stringify(decoded)+
    "||"+JSON.stringify(payload) });
});

module.exports = router;
