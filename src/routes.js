const router = require('express').Router();

const User = require('./controllers/user.controller');
const Session = require('./controllers/session.controller');

router.post('/users', User.register);
router.post('/session', Session.signin);

module.exports = router;
