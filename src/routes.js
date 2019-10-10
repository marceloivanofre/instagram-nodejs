const router = require('express').Router();

const User = require('./controllers/user.controller');
const Session = require('./controllers/session.controller');

const register = require('./middlewares/register');
const signin = require('./middlewares/signin');

router.post('/users', register, User.register);
router.post('/session', signin, Session.signin);

module.exports = router;
