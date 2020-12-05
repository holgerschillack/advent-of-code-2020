const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const inputArray = data.toString().split("\n");
  console.log("Entries in input: " + inputArray.length);
  solvePartOne(inputArray);
});

function solvePartOne(inputArray) {
  const ids = [];
  inputArray.forEach((element) => {
    // split input into rows and seats: FBFBBFF RLR

    const rows = element.substring(0, 7).trim();
    const seats = element.substring(7).trim();
    const row = findRow(rows, 0, 127);
    const seat = findSeat(seats, 0, 7);
    const multi = row * 8 + seat;
    // console.log(multi, row, seat);
    ids.push(multi);
  });
  ids.sort((a, b) => a - b);
  console.log("\n######### PART 1 #########");
  console.log(ids[ids.length - 1]);
  console.log("##########################\n");
  solvePartTwo(ids);
}

function findRow(input, min, max) {
  if (input.length === 1 && input === "F") {
    return min;
  } else if (input.length === 1 && input === "B") {
    return max;
  } else if (input.charAt(0) === "F") {
    return findRow(input.substring(1), min, (min + max - 1) / 2);
  } else if (input.charAt(0) === "B") {
    return findRow(input.substring(1), (min + max + 1) / 2, max);
  }
}

function findSeat(input, min, max) {
  if (input.length === 1 && input === "L") {
    // console.log("input, min, max", input, min, max);
    return min;
  } else if (input.length === 1 && input === "R") {
    // console.log("input, min, max", input, min, max);
    return max;
  } else if (input.charAt(0) === "L") {
    return findSeat(input.substring(1), min, (min + max - 1) / 2);
  } else if (input.charAt(0) === "R") {
    return findSeat(input.substring(1), (min + max + 1) / 2, max);
  }
}

function solvePartTwo(inputArray) {
  console.log("######### PART 2 #########");
  for (let index = 1; index < inputArray.length; index++) {
    const element = inputArray[index];
    const before = inputArray[index - 1];

    if (element - before === 2) console.log((element + before) / 2);
  }
  console.log("##########################\n");
}
