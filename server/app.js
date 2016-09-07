const express = require( 'express' );
const app = express();
const images = require('./routes/images-route');
const albums = require('./routes/album-routes');
const auth = require('./routes/auth-routes');
// const users = require('./routes/user-routes');
const ensureAuth = require('./lib/ensureAuth');
// const ensureRole = require('./lib/ensureRole');
const errorHandler = require('./lib/errorHandler');
const notFound = require('./lib/notFound');

app.use( express.static( __dirname + '/public' ) );

app.use( ( req, res, next ) => {
  const url = '*';
  res.header( 'Access-Control-Allow-Origin', url );
  res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
});

app.use('/api/auth', auth);
// app.use('/api/users', ensureAuth, ensureRole, users);
app.use('/api/images', ensureAuth, images);
app.use('/api/albums', ensureAuth, albums);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
