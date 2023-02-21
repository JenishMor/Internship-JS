function insertDash(str) {
  let strArr;
  strArr = str.split("");
  //   console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    // console.log(strArr[i], " ", strArr[i - 1]);
    if (strArr[i] % 2 == 1 && strArr[i + 1] % 2 == 1) {
      strArr.splice(i + 1, 0, "-");
    }
  }
  console.log(strArr.join(""));
}

insertDash("99946");
insertDash("56737");

// Swap case

function swapCase(str) {
  return str
    .split("")
    .map((val) => {
      if (val === val.toLowerCase()) return val.toUpperCase();
      if (val === val.toUpperCase()) return val.toLowerCase();
      else return val;
    })
    .join("");
}

console.log(swapCase("Hello-LOL"));
