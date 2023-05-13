// 8 kyu Remove exclamation marks

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((char) => char !== "!")
    .join("");
}
