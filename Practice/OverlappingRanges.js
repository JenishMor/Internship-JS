function isOvrelap(arr) {
  //   let first = arr[0];
  //   let second = arr[1];
  //   let third = arr[2];
  //   let fourth = arr[3];

  //   let firstArr = [];
  //   let secondArr = [];
  //   for (let i = first; i <= second; i++) {
  //     firstArr.push(i);
  //   }
  //   for (let i = third; i <= fourth; i++) {
  //     secondArr.push(i);
  //   }

  //   let count = 0;
  //   for (let item of firstArr) {
  //     if (secondArr.includes(item)) {
  //       count++;
  //     }
  //   }
  //   if (count >= arr[arr.length - 1]) {
  //     return true;
  //   }
  //   return false;

  let count = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    if (i >= arr[2] && i <= arr[3]) {
      count++;
    }
  }
  //   if (count >= arr[4]) {
  //     return true;
  //   }
  //   return false;
  return count >= arr[4] ? true : false;
}

console.log(isOvrelap([4, 10, 2, 6, 3]));
console.log(isOvrelap([5, 11, 1, 5, 1]));
console.log(isOvrelap([1, 8, 2, 4, 4]));
