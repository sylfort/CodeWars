process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  // Assuming the input format is: "x y z"
  var [x, y, z] = lines[0].split(" ").map(Number);

  function winners(x, y, z) {
    var prizes = [];
    for (var i = 0; i <= x; i++) {
      if (i % y === 0 && i % z === 0) {
        prizes.push("AB");
      } else if (i % y === 0) {
        prizes.push("A");
      } else if (i % z === 0) {
        prizes.push("B");
      } else {
        prizes.push("N");
      }
    }

    return prizes.join("\n");
  }

  console.log(winners(x, y, z));
});
