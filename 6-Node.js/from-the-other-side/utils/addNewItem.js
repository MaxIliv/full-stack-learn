import fs from 'node:fs/promises';
import path from 'node:path';
import { getData } from './getData.js';

export async function addNewItem(newItem) {
  try {
    // 1. Get existing Data
    const data = await getData();

    // 2. Push new item
    const newData = [...data, newItem];

    // 3. Write to file
    const filePath = path.join('data', 'data.json');
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), {
      encoding: 'utf-8',
    });
  } catch (err) {
    throw new Error(`Failed to add item: ${err}`);
  }
}
