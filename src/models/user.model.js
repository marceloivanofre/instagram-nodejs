const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { model, Schema } = require('../config/database');

const userSchema = new Schema({
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
    lowercase: true,
    unique: true
  },
  account_created: {
    type: String,
    default: Date.now()
  }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
  comparePassword(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  }
};

userSchema.statics = {
  generateToken({ id, forename, email }) {
    return jwt.sign(
      {
        id,
        forename,
        email
      },
      process.env.SECRET,
      {
        expiresIn: 86400
      }
    );
  },
  decodeToken(token) {
    return jwt.decode(token);
  }
};

module.exports = model('user', userSchema);
