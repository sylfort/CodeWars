// Highest Scoring Word
function high(str) {
  let points = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let strPontuation = [];

  let strArr = str.split(" ");
  strArr.map((word, index) => {
    let lettersArr = word.split("");
    let pointsArr = lettersArr.map((letter) => points[letter]);
    let wordPontuation = pointsArr.reduce((a, b) => a + b);

    strPontuation.push([word, wordPontuation, index]);
  });

  strPontuation.sort(function (a, b) {
    return b[1] - a[1];
  });

  if (strPontuation[0][1] == strPontuation[1][1]) {
    if (strPontuation[0][2] < strPontuation[1][2]) {
      return strPontuation[0][0];
    } else {
      return strPontuation[1][0];
    }
  }

  return strPontuation[0][0];
}
