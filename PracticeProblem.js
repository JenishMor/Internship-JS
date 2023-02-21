// Min Window Substring
// Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr,
// which will contain only two strings, the first parameter being the string N and the second parameter
// being a string K of some characters, and your goal is to determine the smallest substring of N that contains
// all the characters in K.

// For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that
//  contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program
//  should return the string dae.

// Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all
// of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be
// strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N.
// Both strings will only contains lowercase alphabetic characters.

// Input: ["ahffaksfajeeubsne", "jefaa"]
// Output: aksfaje

function minWindowSubstring(strArr) {
  [str, key] = [strArr[0], strArr[1]];
  let keyArr = key.split("");
  console.log(str);
  console.log(keyArr);
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let keyArr1 = keyArr.slice();
    for (let j = i; j < str.length; j++) {
      if (keyArr1.includes(str[j]) && keyArr1.length !== 0) {
        keyArr1.splice(keyArr1.indexOf(str[j]), 1);
      }
      if (keyArr1.length === 0) {
        newArr.push(str.substring(i, j + 1));
      }
    }
  }
  let subStr = newArr.reduce((a, b) => (a.length <= b.length ? a : b));
  //   return newArr;
  return subStr;
}

// let arr = ["j", "e", "n"];
// arr.splice(arr.indexOf("e"), 1);
// console.log(arr);

// console.log(minWindowSubstring(["aaabaaddae", "aed"]));
// console.log(minWindowSubstring(["aaffhkksemckelloe", "fhea"]));
console.log(minWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, sum) => (acc += sum), 0);
// console.log(sum);
