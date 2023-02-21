// function maxLen(str, i, j) {
//   while (i >= 0 && j < str.length) {
//     if (str[i] !== str[j]) {
//       break;
//     } else {
//       j++;
//       i--;
//     }
//   }
//   return j - i - 1;
// }

// const longestPalin = (str) => {
//   let start = 0;
//   let maxl = 0;
//   for (let i = 0; i < str.length; i++) {
//     let val1 = maxLen(str, i, i + 1); //even
//     let val2 = maxLen(str, i, i); //odd
//     let mx = Math.max(val1, val2);
//     if (mx > maxl) {
//       maxl = mx;
//       console.log(i, maxl);
//       //   console.log(Math.trunc((maxl - 1) / 2));
//       start = i - Math.trunc((mx - 1) / 2);
//     }
//   }
//   console.log(start);
//   console.log(str.substr(start, maxl));
// };

// longestPalin("aaaabbaa");
// longestPalin("abc");

// ----------------------------------------------------------------------------
// Naive Approach
function Palin(str) {
  let newStr = str.split("").reverse().join("");
  if (newStr === str) {
    return true;
  }
  return false;
}

// console.log(Palin("aabba"));

function longestPalin(str) {
  let Arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      //   console.log(str.slice(i, j + 1));
      if (Palin(str.slice(i, j + 1))) {
        Arr.push(str.slice(i, j + 1));
      }
    }
  }
  //   console.log(Arr);
  let maxLen = 0;
  let ans;
  //   let ans = Arr.reduce((a, b) => (a.length > b.length ? a : b));
  for (let item of Arr) {
    if (item.length > maxLen) {
      maxLen = item.length;
      ans = item;
    }
  }
  return ans;
}

console.log(longestPalin("aaaabbaa"));
