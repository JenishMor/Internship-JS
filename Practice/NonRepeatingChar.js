function nonRepeating(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    // if (obj[str[i]] === undefined) {
    //   obj[str[i]] = 0;
    // }
    // obj[str[i]]++;
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (let i in obj) {
    // console.log(i, obj[i]);
    if (obj[i] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(nonRepeating("abcdef"));
console.log(nonRepeating("hello world hi hey"));
console.log(nonRepeating("agettkgaeee"));
