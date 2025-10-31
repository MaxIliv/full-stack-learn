import http from 'node:http';

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.write('content');
  res.write('content 2');

  // must finish
  res.end();
  // res.end('Hello from server!', 'utf-8', () => {
  //   console.log('response end!')
  // }) // sends data
})

server.listen(PORT, () => {
  console.log('Server running on port:', PORT);
})