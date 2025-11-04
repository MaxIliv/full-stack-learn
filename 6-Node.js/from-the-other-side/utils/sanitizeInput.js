import sanitizeHTML from 'sanitize-html';

const rules = { allowedAttributes: [], allowedTags: ['b'] };

export function sanitizeInput(data) {
  const sanitizedData = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitizedData[key] = sanitizeHTML(value, rules);
    } else {
      sanitizedData[key] = value;
    }
  }

  return sanitizedData;
}
