import path from 'node:path';
import fs from 'node:fs/promises';
import { sendResponse } from './sendResponse.js';
import { getContentType } from './getContentType.js';

export async function serveStatic(req, res, baseDir) {
  const publicDir = path.join(baseDir, 'public');

  const filePath = path.join(
    publicDir,
    req.url === '/' ? 'index.html' : req.url
  );

  const extention = path.extname(filePath);
  const contentType = getContentType(extention);

  try {
    const payload = await fs.readFile(filePath);

    sendResponse({
      res,
      payload,
      contentType,
    });
  } catch (err) {
    console.log(err);
  }
}
