const app = require('./app');
const http = require('http');
const portNum = process.env.PORT || 8080;
require('./mongooseSetup');

const server = http.createServer(app);

server.listen(portNum, err => {
  if (err) console.error('there was a problem: ', err);
  else console.log(`the server is running at 'localhost:${portNum}'`);
});
