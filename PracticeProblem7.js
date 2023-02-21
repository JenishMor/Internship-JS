var lengthOfLongestSubstring = function (s) {
  let arr = [];
  const findstr = function (i, str) {
    let temp = new Set();
    let num = 0;
    while (i < str.length) {
      if (!temp.has(str[i])) {
        temp.add(str[i]);
        num++;
        if (i === str.length - 1) {
          arr.push(num);
        }
      } else {
        arr.push(num);
        break;
      }
      i++;
    }
  };
  console.log(arr);
  const loopthrough = function (s) {
    for (let i = 0; i < s.length; i++) {
      findstr(i, s);
    }
    let max = arr.reduce((max, i) => (i > max ? i : max), 0);
    console.log(arr);
    return max;
  };
  return loopthrough(s);
};

console.log(lengthOfLongestSubstring("abcabcaab")); 
