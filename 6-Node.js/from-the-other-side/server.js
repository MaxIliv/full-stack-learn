import http from 'node:http'

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})