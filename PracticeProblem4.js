// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II.
// The number 27 is written as XXVII, which is XX + V + II.

var romanToInt = function (str) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] < obj[str[i + 1]]) {
      num -= obj[str[i]];
    } else {
      num += obj[str[i]];
    }
  }
  return num;
};

console.log(romanToInt("IX"));
console.log(romanToInt("XI"));
console.log(romanToInt("CM"));
console.log(romanToInt("II"));
console.log(romanToInt("XL"));
console.log(romanToInt("LXXX"));
console.log(romanToInt("VIII"));
console.log(romanToInt("IV"));
console.log(romanToInt("DCCC"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
