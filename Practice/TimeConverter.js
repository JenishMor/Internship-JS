function timeConverter(num) {
  let first = Math.trunc(num / 60);
  let second = num % 60;
  let str = `${first}:${second}`;
  return str;
}

console.log(timeConverter(63));

// let str = "coderbyte";
// let strArr = str.split("");
// // let newStr = strArr.sort(((a, b) => a.charCodeAt(0) - b.charCodeAt(0)));
// let newStr = strArr.sort();
// console.log(newStr.join(""));

// let str = "never odd or even";
// let newStr = str.replaceAll(" ", "");
// console.log(newStr);
// let strArr = newStr.split("");
// let ans = strArr.reverse().join("");
// console.log(ans);
// console.log(ans === newStr ? "true" : "false");

// AP. GP
// let arr = [5, 10, 15, 20, 25];
let arr = [2, 4, 16, 256];
function checkSeries(arr) {
  let n = arr.length;
  let a = arr[0];
  let d = arr[1] - arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i + 1] - arr[i] !== d) {
      break;
    }
    if (i === n - 2) {
      return "Arithmetic";
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] * arr[i] !== arr[i + 1]) {
      break;
    }
    if (i === n - 2) {
      return "Geometric";
    }
  }
  return -1;
}

console.log(checkSeries(arr));
