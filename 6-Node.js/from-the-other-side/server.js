import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js';
import { handleApiGet, handleApiPost } from './handlers/rootHandlers.js';

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith('/api')) {
    if (req.method === 'GET') {
      return await handleApiGet({ res });
    }
    if (req.method === 'POST') {
      return await handleApiPost({ req, res });
    }
  } else if (!req.url.startsWith('/api')) {
    return await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
