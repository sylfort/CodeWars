// 771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  let moxes = [];
  let stonesArr = stones.split("");
  let jewelsArr = jewels.split("");
  for (let j = 0; j < stonesArr.length; j++) {
    for (let i = 0; i < jewelsArr.length; i++) {
      if (stonesArr[j] === jewelsArr[i]) {
        moxes.push(stonesArr[j]);
      }
    }
  }

  return moxes.length;
};
