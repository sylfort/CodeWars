// 217. Contains Duplicate
var containsDuplicate = function (nums) {
  let set = new Set();

  for (const item of nums) {
    if (set.has(item)) {
      return true;
    }
    set.add(item);
  }

  return false;
};
