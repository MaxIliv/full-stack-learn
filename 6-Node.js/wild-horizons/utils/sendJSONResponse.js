export const sendJSONResponse = (res, statusCode, payload) => {
  res.setHeader('Content-Type', 'application/json');

  // CORS
  // Allow any domain/protocol/port
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Only for specific methods
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.statusCode = statusCode;
  res.end(JSON.stringify(payload));
}