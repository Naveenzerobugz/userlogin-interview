var express = require("express");
var router = express.Router();

//role
const login = require("../controllers").login;

router.post('/signup', login.useradd);
router.post('/signin', login.signin);
router.post('/aftersingup', login.updatelastlogin);
module.exports = router;