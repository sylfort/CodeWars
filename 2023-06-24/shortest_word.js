// 7 kyu Shortest Word

function findShort(s) {
  let words = s.split(" ");

  let shortest = words[0];

  words.map((word) => {
    if (word.length < shortest.length) {
      shortest = word;
    }
  });

  return shortest.length;
}
