const Joi = require('@hapi/joi');

module.exports = {
  register: Joi.object().keys({
    forename: Joi.string()
      .trim()
      .max(45)
      .required()
      .error(new Error('Invalid name')),
    surname: Joi.string()
      .trim()
      .max(45)
      .required()
      .error(new Error('Invalid surname')),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .error(new Error('Invalid email')),
    password: Joi.string()
      .trim()
      .max(45)
      .required()
      .error(new Error('Invalid password'))
  })
};
