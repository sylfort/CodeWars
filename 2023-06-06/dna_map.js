// 7 kyu Complementary DNA

function DNAStrand(dna) {
  let dnaMap = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  let arr = dna.split("");
  return arr.map((e) => dnaMap[e]).join("");
}
