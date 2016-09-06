const app = require('./app');

const port = process.env.PORT || 3000;

require('./setup-mongoose');

app.listen(port);

console.log('Server running on', port);
