// Beginner Series #2 Clock
function past(h, m, s) {
  let mili = s * 1000 + m * 60000 + h * 3600000;
  return mili;
}

// MakeUpperCase
function makeUpperCase(str) {
  return str
    .split("")
    .map((e) => e.toUpperCase())
    .join("");
}

// Reversed Words
function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // reverse those words
}

// Is he gonna survive?
function hero(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
}
