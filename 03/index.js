const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const inputArray = data.toString().split("\n");
  console.log("Entries in input: " + inputArray.length);
  console.log(solvePartOne(inputArray, 3));
  solvePartTwo(inputArray);
});

function solvePartOne(inputArray, right, down = 1) {
  let trees = 0;
  let step = right;
  for (let index = down; index < inputArray.length; index += down) {
    const line = inputArray[index].trim();
    if (line.charAt(step % line.length) === "#") trees++;
    step += right;
  }
  return trees;
}

function solvePartTwo(inputArray) {
  let multi = 0;
  multi += solvePartOne(inputArray, 1, 1);
  multi *= solvePartOne(inputArray, 3, 1);
  multi *= solvePartOne(inputArray, 5, 1);
  multi *= solvePartOne(inputArray, 7, 1);
  multi *= solvePartOne(inputArray, 1, 2);
  console.log(multi);
}
