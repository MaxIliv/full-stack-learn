export function getDataByPathParams(data, key, name) {
  return data.filter(
    (d) => d[key].toLowerCase() === name.toLowerCase()
  );
}