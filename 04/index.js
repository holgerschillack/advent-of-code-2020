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
  const keyList = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let validPws = 0;

  inputArray.forEach((passport) => {
    const str = passport;
    const re = /[a-z]{3}(?=:)/g;
    let keys = [];

    while ((match = re.exec(str))) {
      keys.push(match[0]);
    }

    let count = 0;

    keys.forEach((k) => {
      if (keyList.includes(k)) count++;
    });

    if (count === 7) validPws++;
  });
  console.log(validPws);
}

function solvePartTwo(inputArray) {
  let validPws = 0;

  inputArray.forEach((passport) => {
    const reKeys = /[a-z]{3}(?=:)/g;
    const reValues = /(:=?)[#a-z0-9]*/g;
    let keys = [];
    let values = [];

    while ((match = reKeys.exec(passport))) {
      keys.push(match[0]);
    }
    while ((match = reValues.exec(passport))) {
      values.push(match[0].substring(1));
    }

    let count = 0;
    let valid = 0;

    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const value = values[index];
      const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
      switch (key) {
        case "byr":
          if (value >= 1920 && value <= 2002) valid++;
          break;
        case "iyr":
          if (value >= 2010 && value <= 2020) valid++;
          break;
        case "eyr":
          if (value >= 2020 && value <= 2030) valid++;
          break;
        case "hgt":
          if (value.match(/\d+in|\d+cm/g)) {
            const height = value.substring(0, value.length - 2);

            if (value.indexOf("cm") != -1) {
              if (parseInt(height) >= 150 && parseInt(height) <= 193) valid++;
            } else {
              if (parseInt(height) >= 59 && parseInt(height) <= 76) valid++;
            }
          }
          break;
        case "hcl":
          if (value.match(/#[0-9a-f]{6}/g) && value.length === 7) valid++;
          break;
        case "ecl":
          if (eyeColors.includes(value)) valid++;
          break;
        case "pid":
          if (value.match(/\d{9}/g) && value.length === 9) valid++;
          break;
      }

      count++;
    }

    if (count >= 7 && valid === 7) validPws++;
  });
  console.log(validPws);
}
