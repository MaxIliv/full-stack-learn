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
  //  collect incoming payload
  // parseJSONBody
  // sanitize
  // add new item
  // send response to client
}