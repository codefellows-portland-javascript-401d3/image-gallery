const express = require('express');
const app = express();
const url = require('url');
const path = require('path');
const logger = require('morgan')('dev');

app.use(logger);

app.use(express.static(__dirname + '/public'));

app.use((err, req, res, next) => {
  res.status(err.code || 500)
    .json({error: err.error || err.message || err});
});

module.exports = app;