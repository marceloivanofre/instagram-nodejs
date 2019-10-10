const { signin } = require('../validators/session.schema');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await signin.validate({
      email,
      password
    });

    if (result.error) {
      throw new Error(result.error);
    }

    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
