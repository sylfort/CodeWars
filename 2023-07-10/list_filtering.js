//7 kyu List Filtering

function filter_list(l, index = 0, filteredArr = []) {
  const filterNumber = (e) => typeof e == "number";

  if ((index = l.length)) {
    return filteredArr;
  }

  if (filterNumber(l[index])) {
    filteredArr.push(l[index]);
  }

  return filter_list(l, index + 1, filteredArr);
}

console.log(filter_list([1, 2, "a", "b"])); // [1,2]
