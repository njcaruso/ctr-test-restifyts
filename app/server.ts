import * as restify from 'restify';
const server = restify.createServer();
const pkg = require('../package.json');

server.get('/', (req, res, next) => {
  res.send('Hello from restifyts');
  next();
});

server.listen(3000, () => {
  console.log('restifyts version %s running on port 3000', pkg.version);
  setInterval(function() {
    console.log('restifyts version %s running on port 3000', pkg.version);
  }, 10000);
});