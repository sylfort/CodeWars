// 7 kyu Absent vowel

function absentVowel(x) {
  let arr = x.split("");
  console.log(arr);
  let vowels = arr.filter((e) => {
    return e == "a" || e == "e" || e == "o" || e == "u" || e == "i";
  });
  console.log(vowels);

  if (!vowels.includes("a")) {
    return 0;
  } else if (!vowels.includes("e")) {
    return 1;
  } else if (!vowels.includes("i")) {
    return 2;
  } else if (!vowels.includes("o")) {
    return 3;
  } else if (!vowels.includes("u")) {
    return 4;
  }
}
