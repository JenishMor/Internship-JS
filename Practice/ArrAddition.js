// let arr = [5, 7, 16, 1, 2];
// let arr = [4, 6, 23, 10, 1, 3];
let arr = [3, 5, -1, 8, 12];

function arrAddition(arr) {
  arr.sort((a, b) => a - b);
  let num = arr[arr.length - 1];
  console.log(arr);
  //   let num = Math.max(...arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = 0;
    for (let j = i; j < arr.length - 1; j++) {
      sum += arr[j];
      console.log(sum);
      if (sum === num) {
        return true;
      }
    }
  }
  return false;
}
console.log(arrAddition(arr));
