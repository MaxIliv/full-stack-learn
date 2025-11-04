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
