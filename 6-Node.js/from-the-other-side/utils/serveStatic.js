import path from 'node:path';
import fs from 'node:fs/promises';
import { sendResponse } from './sendResponse.js';

export async function serveStatic(req, res, baseDir) {
  const filePath = path.join(baseDir, 'public', 'index.html');

  try {
    const payload = await fs.readFile(filePath);

    sendResponse({
      res,
      payload
    })
  } catch (err) {
    console.log(err);
  }
}