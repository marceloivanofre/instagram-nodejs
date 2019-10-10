const { register } = require('../validators/user.schema');

module.exports = async (req, res, next) => {
  const { forename, surname, email, password } = req.body;
  try {
    const result = await register.validate({
      forename,
      surname,
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
