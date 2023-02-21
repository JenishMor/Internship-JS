// let str = "3gy41d216";
// var rgx = /[24680]d*[24680]/;
// console.log(rgx.test(str));

// var rgx = /\d+/g;
// console.log(str.match(/\d+/g));
// console.log(str.match(/\d*[24680]\d*[24680]/));

function checkPalin(num) {
  let myNum = num.toString().split("").reverse().join("");
  //   console.log(myNum);
  //   console.log(myNum == num);
  return myNum == num;
}

checkPalin(123);
function nextPalin(num) {
  if (checkPalin(num)) {
    num += 1;
  }
  while (!checkPalin(num)) {
    num++;
  }
  return num;
}

console.log(nextPalin(999));
console.log(nextPalin(2));
console.log(nextPalin(180));
console.log(nextPalin(1200));
