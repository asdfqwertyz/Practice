function showInfo(num) {
  let flag;
  if (num > 0) {
    flag = 0;
  } else if (num < 0) {
    flag = 1;
  }
  if (
    Math.trunc(num) / Math.pow(10, 1) >= 0.1 &&
    Math.trunc(num) / Math.pow(10, 1) < 1
  ) {
    if (flag === 0) {
      console.log(`${num} - положительно однозначное`);
    } else {
      console.log(`${num} - отрицательно однозначное`);
    }
  }
  if (
    Math.trunc(num) / Math.pow(10, 2) >= 0.1 &&
    Math.trunc(num) / Math.pow(10, 2) < 1
  ) {
    if (flag === 0) {
      console.log(`${num} - положительно двузначное`);
    } else {
      console.log(`${num} - отрицательно двузначное`);
    }
  }
  if (
    Math.trunc(num) / Math.pow(10, 3) >= 0.1 &&
    Math.trunc(num) / Math.pow(10, 3) < 1
  ) {
    if (flag === 0) {
      console.log(`${num} - положительно трехзначное`);
    } else {
      console.log(`${num} - отрицательно трехзначное`);
    }
  }
  if (num === 0) {
    console.log(`${num} - нуль`);
  }
}

module.exports = showInfo
