const router = require('express').Router();

const User = require('./controllers/user.controller');

router.get('/', User.helloWorld);

module.exports = router;
