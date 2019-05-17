var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');

router.get('/', function (req, res, next) {

    var encodedJWT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJhZGlvcyJ9.G5tFr4hK4tkljznknH7oG_SRgsBHJLr3XYbvl69hDCg";
    var secret = "XwdKtoBAV9fwBfFKCZCmTyCW";
    var decodedJWT = jwt.decode(encodedJWT, secret);

    res.json(decodedJWT);

});

module.exports = router;