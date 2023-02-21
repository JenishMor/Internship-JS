function checkSymbol(str) {
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      //   console.log(str[i - 1], str[i], str[i + 1]);
      if (str[i - 1] !== "+" || str[i + 1] !== "+") {
        return "false";
      }
    }
  }
  return "true";
}

// let str = "+d=3=+s+";
let str = "+d+=3=+s+";
// let str = "";
console.log(checkSymbol(str));
