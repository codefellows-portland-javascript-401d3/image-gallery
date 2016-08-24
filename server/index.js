const app = require('./app');
const portNum = process.env.PORT || 3000;

app.listen(portNum, err => {
  if (err) console.error('there was a problem: ', err);
  else console.log(`the server is running at 'localhost:${portNum}'`);
});
