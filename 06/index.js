const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const inputArray = data.toString().split("\n\r");
  console.log("Entries in input: " + inputArray.length);
  solvePartOne(inputArray);
  solvePartTwo(inputArray);
});

function solvePartOne(inputArray) {
  let sum = 0;
  inputArray.forEach((element) => {
    let e = element.replace(/^\s+|\s+$/g, "");
    e = e.replace(/(?:\\[rn]|[\r\n]+)+/g, "");
    const group = [];
    for (let index = 0; index < e.trim().length; index++) {
      const char = e.charAt(index);
      group.push(char);
    }

    let unique = [...new Set(group)];
    sum += unique.length;
  });

  console.log("\n######### PART 1 #########");
  console.log(sum);
  console.log("##########################\n");
}

function solvePartTwo(inputArray) {
  let sum = 0;

  inputArray.forEach((element) => {
    let occur = 0;
    let e = element.replace(/^\s+|\s+$/g, "");

    const peopleCount = e.split("\n").length;
    e = e.replace(/(?:\\[rn]|[\r\n]+)+/g, "");

    const group = [];
    for (let index = 0; index < e.trim().length; index++) {
      const char = e.charAt(index);
      group.push(char);
    }

    let unique = [...new Set(group)];
    unique.forEach((u) => {
      if (countOccurrences(group, u) === peopleCount) occur++;
    });
    sum += occur;
  });

  console.log("######### PART 2 #########");
  console.log(sum);
  console.log("##########################\n");
}

function countOccurrences(arr, val) {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
