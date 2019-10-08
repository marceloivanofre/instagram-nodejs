const User = require('../models/user.model');
const { CREATED } = require('../utils/successTypes');
const { INTERNAL_SERVER_ERROR } = require('../utils/errorTypes');

module.exports = {
  async register(req, res) {
    try {
      await User.create({ ...req.body });
      res.status(201).json({ msg: CREATED });
    } catch (error) {
      res.status(500).json({ msg: INTERNAL_SERVER_ERROR });
    }
  }
};
