function DivisionStringified(num1, num2) {
  let res = Math.round(num1 / num2);
  //   let res = 22222222222222;
  let resStr = res.toString();
  //   console.log(resStr);
  let strArr = resStr.split("");
  for (let i = strArr.length - 3; i > 0; i -= 2) {
    strArr.splice(i, 0, ",");
  }
  return strArr.join("");
}

console.log(DivisionStringified(123456789, 10000));
