function largestPair(num) {
  //   let numArr = num.toString().split("");
  //   let max = 0;
  //   let n = "";
  //   for (let i = 0; i < numArr.length - 1; i += 2) {
  //     n = numArr[i] + numArr[i + 1];
  //     //   console.log(Number(n));
  //     max = Math.max(Number(n), max);
  //   }
  //   for (let i = 1; i < numArr.length - 1; i += 2) {
  //     n = numArr[i] + numArr[i + 1];
  //     //   console.log(Number(n));
  //     max = Math.max(Number(n), max);
  //   }
  //   // console.log("Here is max ele: ", max);
  //   return max;

  num = num.toString();
  let largestNum = 0;
  for (let i = 1; i < num.length; i++) {
    let testNum = parseInt(num[i - 1] + num[i]);
    if (testNum > largestNum) {
      largestNum = testNum;
    }
  }
  return largestNum;
}

// largestPair(4759472);
console.log(largestPair(4759472));
console.log(largestPair(453857));
console.log(largestPair(363223311));
