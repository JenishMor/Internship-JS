function longestSubstr(str) {
  if (str === "") {
    return "0";
  }
  let newArr = [];
  let maxLen = 0;
  for (let i = 0; i < str.length; i++) {
    newArr.push(str[i]);
    for (let j = i + 1; j < str.length; j++) {
      if (!newArr.includes(str[j])) {
        newArr.push(str[j]);
        console.log(newArr, "->", newArr.length);
        maxLen = Math.max(maxLen, newArr.length);
      } else {
        newArr.splice(0, newArr.length);
        break;
      }
      //   !newArr.includes(str[j])
      //     ? newArr.push(str[j])
      //     : newArr.splice(0, newArr.length);
      //   break;
    }
    // console.log(newArr);
  }
  console.log(maxLen);
}

// longestSubstr("dvdf");
// longestSubstr("abcabcbb");
longestSubstr("bbbbb");
