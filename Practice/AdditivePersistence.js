// function addition(num) {
//   return num
//     .toString()
//     .split("")
//     .reduce((sum, n) => sum + Number(n), 0);
// }

// function persisance(num) {
//   let res = num;
//   let count = 0;
//   while (res > 9) {
//     res = addition(res);
//     count++;
//   }
//   return count;
// }

function persisance(num) {
  let count = 0;
  while (num >= 10) {
    let digits = num.toString().split("").map(Number);
    num = digits.reduce((a, b) => a + b, 0);
    count++;
  }
  return count;
}

console.log(persisance(2718));
console.log(persisance(4));
console.log(persisance(19));
console.log(persisance(18));
