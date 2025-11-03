import http from 'node:http'

const PORT = 8000;

const server = http.createServer((req, res) => {

  // included
  res.setHeader('Content-Type', 'text/html');

  // sends headers immideately
  // overrides Content type
  res.writeHead(200, 'OK', {
    'Content-Type': 'text/html'
  });

  // Ignored
  res.setHeader('Content-Type', 'text/html');

  res.end('<html><h1>The server is working</h1></html>');
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})