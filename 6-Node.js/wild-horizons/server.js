import http from 'node:http';
import { getDataFromDB } from './database/db.js';
import { sendJSONResponse } from './utils/sendJSONResponse.js';
import { getDataByPathParams } from './utils/getDataByPathParams.js';
import { parseQueryParamsFromRequest } from './utils/parseQueryParams.js';
import { getDataByQueryParams } from './utils/getDataByQueryParams.js';

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();

  const BASE_URL = `http://${req.headers.host}`;
  const urlObj = new URL(req.url, BASE_URL);

  if (urlObj.pathname === '/api' && req.method === 'GET') {
    const queryParamsObj = parseQueryParamsFromRequest(req);
    let filteredData = getDataByQueryParams(destinations, queryParamsObj)

    sendJSONResponse(res, 200, filteredData);
  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop();
    const filteredData = getDataByPathParams(destinations, 'continent', continent);

    sendJSONResponse(res, 200, filteredData);
  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
    const country = req.url.split('/').pop();
    const filteredData = getDataByPathParams(destinations, 'country', country);

    sendJSONResponse(res, 200, filteredData);
  } else {
    sendJSONResponse(res, 404, {
      error: 'Not found',
      message: 'The requested route does not exist',
    });
  }
});

server.listen(PORT, () => {
  console.log('Server running on port:', PORT);
});
