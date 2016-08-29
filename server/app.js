const express = require('express');
const app = module.exports = express();

app.use(express.static( __dirname + '/public'));

//CORS stuff for later
// app.use((req, res, next)=>{
//   const url = '*';
//   res.header( 'Access-Control-Allow-Origin', url );
//   res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
//   res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
//   next();
// });

//Add API calls here later
