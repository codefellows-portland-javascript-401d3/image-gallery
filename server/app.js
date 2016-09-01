const express = require( 'express' );
const app = express();
const images = require('./routes/images-route');
const albums = require('./routes/album-routes');
const errorHandler = require('./errorHandler');
const notFound = require('./notFound');

app.use( express.static( __dirname + '/public' ) );

app.use( ( req, res, next ) => {
  const url = '*';
  res.header( 'Access-Control-Allow-Origin', url );
  res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
});

app.use('/api/images', images);
app.use('/api/albums', albums);
app.use(notFound);
app.use(errorHandler);

// app.get('/api/images', (req, res) => {
//   setTimeout( () => {
//     res.send([{
//       title: 'My Dog Bill',
//       url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
//       description: 'This is my golden retriever Bill on his 6th birthday!',
//       vote: 0
//     },
//     {
//       title: 'My Cat Molly',
//       url: 'http://a-z-animals.com/media/animals/images/original/african_penguin2.jpg',
//       description: 'This is my cat Molly when she was a puppy!',
//       vote: 0
//     },
//     {
//       title: 'My Horse Sal',
//       url: 'http://a-z-animals.com/media/animals/images/original/akita_dog.jpg',
//       description: 'This is my draft horse Sal when he was young!',
//       vote: 0
//     }]);
//   }, 1000);
// });

module.exports = app;
