const fs = require("fs");

fs.readFile("./input.txt", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const inputArray = data.toString().split("\n");
  console.log("Entries in input: " + data.length);
  solvePartOne(inputArray);
  solvePartTwo(inputArray);
});

function solvePartOne(inputArray) {
  inputArray.forEach((element) => {
    const number1 = parseInt(element);
    inputArray.forEach((e) => {
      const number2 = parseInt(e);

      if (number1 + number2 === 2020) {
        console.log(number1 * number2);
        return true;
      }
    });
  });
}

function solvePartTwo(inputArray) {
  inputArray.forEach((element) => {
    const number1 = parseInt(element);
    inputArray.forEach((el) => {
      const number2 = parseInt(el);

      inputArray.forEach((e) => {
        const number3 = parseInt(e);

        if (number1 + number2 + number3 === 2020) {
          console.log(number1 * number2 * number3);
          return true;
        }
      });
    });
  });
}
