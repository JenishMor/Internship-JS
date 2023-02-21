function isWaveSorting(arr) {
  for (let i = 1; i < arr.length - 1; i += 2) {
    if (arr[i] <= arr[i - 1] || arr[i] <= arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function arranging(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let half = Math.round(n / 2);
  //   let first = arr.slice(0, half + 1);
  //   let second = arr.slice(half);
  [first, second] = [arr.slice(0, half), arr.slice(half)];
  let finalArr = [];
  //   console.log(first);
  //   console.log(second);
  for (let i = 0, j = 0; i < first.length && j < second.length; i++, j++) {
    finalArr.push(first[i]);
    finalArr.push(second[j]);
  }
  console.log(finalArr);
  return isWaveSorting(finalArr);
}

// console.log(isWaveSorting([2, 0, 4, 1, 4, 1]));
// console.log(isWaveSorting([0, 4, 2, 14, 4, 22, 4]));
// console.log(isWaveSorting([0, 4, 22, 4, 14, 4, 2]));

console.log(arranging([0, 1, 2, 4, 1, 4]));
console.log(arranging([0, 1, 2, 4, 1, 1, 1]));
console.log(arranging([0, 4, 22, 4, 14, 4, 2]));
console.log(arranging([1, 2, 3, 4, 4, 4, 5]));
