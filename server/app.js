const express = require('express');
const app = module.exports = express();
const morgan = require('morgan');
const images = require('./routes/images');
const albums = require('./routes/albums');
const auth = require('./routes/auth');
const ensureAuth = require('./auth/ensureAuth');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/dist'));

// CORS stuffs
app.use((request, response, next) => {
  const url = '*';
  response.header('Access-Control-Allow-Origin', url);
  response.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  response.header('Access-Controll-Allow-Headers', 'Origin, X-Requsted-With, Content-Tyle, Accept');
  next();
});

app.use('/api/', auth);
app.use('/api/images', ensureAuth, images);
app.use('/api/albums', ensureAuth, albums);

// eslint-disable-next-line
app.use((err, request, response, next) => {
  response.status(err.code || 500)
  .send({ error: err.error || err.message || err });
});
