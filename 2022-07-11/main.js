// 242. Valid Anagram
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  map = new Map();

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]++;
    } else {
      map[t[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]--;
    } else {
      return false;
    }
  }

  return true;
};
