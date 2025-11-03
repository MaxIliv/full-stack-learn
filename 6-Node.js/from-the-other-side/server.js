import http from 'node:http'

const PORT = 8000;

const server = http.createServer((req, res) => {
  // 1. [] Identify what resources client want?
  // 2. [] Identify path to that resource
  //    [] The current modules directory
  //    [] Path to the resource from that directory
  // 3. [] Read resources with FS
  // 4. [] Send to client

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><h1>The server is working</h1></html>');
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})