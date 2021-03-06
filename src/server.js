require('dotenv').config();
const express = require('express');

const app = express();

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);
app.use(require('./routes'));

app.listen(
  process.env.PORT,
  console.log(`Server has started on http://localhost:${process.env.PORT}`)
);
