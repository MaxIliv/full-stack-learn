import { getData } from '../utils/getData.js';
import { sendResponse } from '../utils/sendResponse.js';

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
  console.log('POST received');
  let body = '';

  for await (const chunk of req) {
    body += chunk;
  }

  const payload = JSON.parse(body);
  console.log('[POST] payload: ', payload);

  sendResponse({
    res,
    statusCode: 201,
    payload: JSON.stringify(payload),
    contentType: 'application/json'
  })
}
