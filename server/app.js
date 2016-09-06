const express = require('express');
const app = module.exports = express();
const morgan = require('morgan');
const images = require('./routes/images');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/images', images);

// eslint-disable-next-line
app.use((err, req, res, next)=>{
  res.status(err.code || 500)
    .send({
      error: err.error || err.message || err
    });
});
