// 8 kyu Is it a palindrome?

function isPalindrome(x) {
  let lowerCaseX = x
    .split("")
    .map((e) => e.toLowerCase())
    .join("");
  let reverseX = x
    .split("")
    .map((e) => e.toLowerCase())
    .reverse()
    .join("");

  return lowerCaseX == reverseX ? true : false;
}
