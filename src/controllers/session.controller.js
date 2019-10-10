const User = require('../models/user.model');
const { ERR_USER_OR_PASS_INVALID } = require('../utils/errorTypes');
const { SUCCESS } = require('../utils/successTypes');

module.exports = {
  async signin(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        throw new Error(ERR_USER_OR_PASS_INVALID);
      }

      if (!(await user.comparePassword(req.body.password))) {
        throw new Error(ERR_USER_OR_PASS_INVALID);
      }

      return res.status(200).json({ msg: SUCCESS, token: User.generateToken(user) });
    } catch (error) {
      switch (error.message) {
        case ERR_USER_OR_PASS_INVALID:
          return res.status(400).json({ msg: 'Invalid user or password' });
        default:
          return res.status(500).json({ msg: 'Internal server error' });
      }
    }
  }
};
