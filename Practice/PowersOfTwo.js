function powerOfTwo(num) {
  //   return Number.isInteger(Math.log(num) / Math.log(2));
  while (num > 2) {
    num /= 2;
  }
  //   console.log(num);
  return Number.isInteger(num);
}

// console.log(powerOfTwo(1024));
// console.log(powerOfTwo(258));
// console.log(powerOfTwo(64));
