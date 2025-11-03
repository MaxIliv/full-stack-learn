export function getDataByQueryParams(data, queryObj) {
  const { country, continent, is_open_to_public } = queryObj;

  if (continent) {
    data = data.filter(d => d.continent.toLowerCase() === continent.toLowerCase());
  }
  if (country) {
    data = data.filter(d => d.country.toLowerCase() === country.toLowerCase());
  }
  
  if (is_open_to_public) {
    data = data.filter(d => d.is_open_to_public === JSON.parse(is_open_to_public));
  }

  return data;
}