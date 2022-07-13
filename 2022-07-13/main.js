// 125. Valid Palindrome
var isPalindrome = function (s) {
  let replaced = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  console.log(replaced);
  let reverse = replaced.split("").reverse().join("");
  console.log(reverse);
  return replaced === reverse ? true : false;
};

isPalindrome("A man, a plan, a canal: Panama");
