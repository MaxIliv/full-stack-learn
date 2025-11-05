import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js';
import {
  handleApiGet,
  handleApiPost,
  handleNews,
} from './handlers/rootHandlers.js';

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === '/sub' && req.method === 'POST') {
    let body = '';

    for await (const chunk of req) {
      body += chunk;
    }

    try {
      const emailObj = JSON.parse(body);
      console.log(emailObj);

      res.statusCode = 201; // accepted
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(emailObj));
    } catch (e) {
      console.log('invalid JSON', e);
    }

    return;
  }

  if (req.url === '/api/news') {
    return await handleNews(req, res);
  } else if (req.url.startsWith('/api')) {
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
