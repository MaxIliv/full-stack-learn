export function sendResponse({
  res,
  statusCode = 200,
  contentType = 'text/html',
  payload,
}) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', contentType);
  res.end(payload);
}
