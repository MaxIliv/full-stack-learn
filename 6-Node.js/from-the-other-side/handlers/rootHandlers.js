import { parseJSONBody } from '../utils/parseJSONBody.js';
import { sendResponse } from '../utils/sendResponse.js';
import { addNewItem } from '../utils/addNewItem.js';
import { getData } from '../utils/getData.js';

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
    await addNewItem(parsedBody);
    const data = await getData();

    sendResponse({
      res,
      statusCode: 201,
      payload: JSON.stringify(data),
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
