var isValid = function (s) {
  let stack = [];
  let map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let i = 0; i < s.length; i++) {
    if (Object.values(map).includes(s[i])) {
      if (stack && stack[stack.length - 1] == map[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") temp.push(s[i]);
    else if (map[temp.pop()] !== s[i]) {
      return false;
    }
  }

  return stack.length == 0;
};
