const Joi = require('@hapi/joi');

module.exports = {
  signin: Joi.object().keys({
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .error(new Error('Invalid username or password')),
    password: Joi.string()
      .trim()
      .required()
      .error(new Error('Invalid username or password'))
  })
};
