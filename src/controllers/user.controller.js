const User = require('../models/user.model');
const { CREATED } = require('../utils/successTypes');

module.exports = {
  async register(req, res) {
    try {
      await User.create({ ...req.body });
      res.status(201).json({ msg: CREATED });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json({ msg: 'Email already in use' });
      }
      res.status(500).json({ msg: 'Internal server error' });
    }
  }
};
