// Sorted? yes? no? how?
function isSortedAndHow(array) {
  const arrayAsc = array.slice().sort((a, b) => a - b);
  const arrayDesc = [...array].sort((a, b) => b - a);

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }
  if (arrayEquals(array, arrayAsc)) {
    return "yes, ascending";
  } else if (arrayEquals(array, arrayDesc)) {
    return "yes, descending";
  }
  return "no";
}
