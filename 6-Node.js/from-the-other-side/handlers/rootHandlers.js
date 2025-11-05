import { parseJSONBody } from '../utils/parseJSONBody.js';
import { sendResponse } from '../utils/sendResponse.js';
import { addNewItem } from '../utils/addNewItem.js';
import { getData } from '../utils/getData.js';
import { sanitizeInput } from '../utils/sanitizeInput.js';
import {
  SIGHTING_EVENT_ADD,
  sightingEmitter,
} from '../events/sightningEvents.js';
import { stories } from '../data/stories.js';

// handleGet
export async function handleApiGet({ res }) {
  const data = await getData();

  sendResponse({
    res,
    contentType: 'application/json',
    payload: JSON.stringify(data),
  });
}

// handle Post
export async function handleApiPost({ req, res }) {
  try {
    const parsedBody = await parseJSONBody(req);
    const sanitizedBody = sanitizeInput(parsedBody);

    await addNewItem(sanitizedBody);

    sightingEmitter.emit(SIGHTING_EVENT_ADD, sanitizedBody);

    sendResponse({
      res,
      statusCode: 201,
      payload: JSON.stringify(sanitizedBody),
      contentType: 'application/json',
    });
  } catch (err) {
    sendResponse({
      res,
      statusCode: 400,
      contentType: 'application/json',
      payload: JSON.stringify({ error: err }),
    });
  }
}

function sentRandom(res) {
  let randomIndex = Math.floor(Math.random() * stories.length);

  const story = stories[randomIndex];

  res.write(
    `data:${JSON.stringify({
      event: 'news-update',
      story,
    })}\n\n` // end of message block
  );
}

export function handleNews(req, res) {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  sentRandom(res);
  setInterval(() => sentRandom(res), 3000);
}
