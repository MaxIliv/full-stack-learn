import http from 'node:http'
import path from 'node:path';

import { serveStatic } from './utils/serveStatic.js';
// 1. [x] Identify what resources client want?
// 2. [x] Identify path to that resource
//    [x] The current modules directory
//    [x] Path to the resource from that directory
// 3. [] Read resources with FS
// 4. [] Send to client

const PORT = 8000;

// console.log(import.meta);
// __dirname - old school node.js
// console.log(import.meta.dirname);
// console.group('dirname', __dirname);
// Path module
// Current Working Directry CWD
// console.group('CWD', process.cwd())

// Absolute path 

// Relative path

const __dirname = import.meta.dirname;

serveStatic(__dirname);

const server = http.createServer((req, res) => {

  const asbolutePathToResource = path.join(__dirname, 'public', 'index.html');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><h1>The server is working</h1></html>');
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})