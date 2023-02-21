function letterCount(str) {
  let strArr = str.split(" ");
  let ans;
  let mxLen = 0;
  let count = 0;
  for (let item of strArr) {
    let set = new Set(item);
    if (item.length === set.size) {
      count++;
    }
    if (count === strArr.length) {
      return -1;
    }
    if (item.length !== set.size) {
      let maxRepeat = item.length - set.size + 1;
      if (maxRepeat > mxLen) {
        mxLen = maxRepeat;
        ans = item;
      }
    }
  }
  //   console.log(ans);
  return ans;
}

console.log(letterCount("Hello appple pie"));
console.log(letterCount("No words"));
console.log(letterCount("Today, is the greatest day ever!"));
