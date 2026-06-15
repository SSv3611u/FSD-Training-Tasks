const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello from the Node http module!');
});

server.listen(3000, () => {
  console.log('HTTP server running at http://localhost:3000');
});
