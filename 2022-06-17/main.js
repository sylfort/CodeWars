// Get key/value pairs as arrays
function keysAndValues(data) {
  let arr = [];
  arr.push(Object.keys(data));
  arr.push(Object.values(data));
  return arr;
}
