export function parseQueryParamsFromRequest(req) {
  const BASE_URL = `http://${req.headers.host}`;
  const urlObj = new URL(req.url, BASE_URL);
  const queryParamsObj = Object.fromEntries(urlObj.searchParams);

  return queryParamsObj;
}