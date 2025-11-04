import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js';
// 1. [x] Identify what resources client want?
// 2. [x] Identify path to that resource
//    [x] The current modules directory
//    [x] Path to the resource from that directory
// 3. [x] Read resources with FS
// 4. [] Send to client

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  await serveStatic(req, res, __dirname);
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
