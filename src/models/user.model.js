const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  forename: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  account_created: {
    type: String,
    default: Date.now()
  }
});

module.exports = mongoose.model('user', userSchema);