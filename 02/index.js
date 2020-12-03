const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const inputArray = data.toString().split("\n");
  console.log("Entries in input: " + inputArray.length);
  solvePartOne(inputArray);
  solvePartTwo(inputArray);
});

function solvePartOne(inputArray) {
  let validPws = 0;
  inputArray.forEach((element) => {
    const pw = element.split(" ");
    const dashPosi = pw[0].indexOf("-");
    const minLimit = pw[0].substring(0, dashPosi);
    const maxLimit = pw[0].substring(dashPosi + 1);
    const searchCharacter = pw[1].slice(0, -1);
    const string = pw[2].trim();
    let count = 0;
    for (let index = 0; index < string.length; index++) {
      const e = string.charAt(index);
      if (e === searchCharacter) count++;
    }
    if (count >= minLimit && count <= maxLimit) validPws++;
  });
  console.log(validPws);
}

function solvePartTwo(inputArray) {
  let validPws = 0;
  inputArray.forEach((element) => {
    const pw = element.split(" ");
    const dashPosi = pw[0].indexOf("-");
    const firstPosi = pw[0].substring(0, dashPosi);
    const lastPosi = pw[0].substring(dashPosi + 1);
    const searchCharacter = pw[1].slice(0, -1).trim();
    const string = pw[2].trim();

    let count = 0;
    if (string.charAt(firstPosi - 1) === searchCharacter) count++;
    if (string.charAt(lastPosi - 1) === searchCharacter) count++;

    // console.log(
    //   `PW ${string} (${firstPosi}:${searchCharacter}, ${lastPosi}:${searchCharacter}) is ${count === 1}`
    // );

    if (count === 1) {
      validPws++;
    }
  });
  console.log(validPws);
}
