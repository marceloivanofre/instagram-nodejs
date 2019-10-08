const mongoose = require('mongoose');
const config = require('./index');

const db = mongoose.connect(config.mongo_uri, { useNewUrlParser: true });

module.exports = db;
