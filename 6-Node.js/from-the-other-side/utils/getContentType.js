const EXT_CONTENT_TYPE_MAP = new Map(Object.entries({
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
}));

const DEFAULT_TYPE = 'text/html';

export function getContentType(extention) {
  return EXT_CONTENT_TYPE_MAP.get(extention.toLowerCase()) || DEFAULT_TYPE;
}
