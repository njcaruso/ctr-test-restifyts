import * as restify from 'restify';
const server = restify.createServer();

server.get('/', (req, res, next) => {
  res.send('Hello from restifyts');
  next();
});

server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url);
});