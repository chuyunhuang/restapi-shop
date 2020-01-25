const http = require('http');
const app = require('./app');

const port = process.env.PPRT || 3001;

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`server listening on ${port}`)
});