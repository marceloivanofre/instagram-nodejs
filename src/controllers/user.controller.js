const User = require('../models/user.model');

module.exports = {
  helloWorld(req, res) {
    res.status(200).json({ msg: 'Hello World!' });
  }
};
