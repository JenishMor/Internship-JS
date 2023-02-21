// let strarr = ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"];
// let strarr = ["apbpleeeef","a,ab,pl,abc,abcg,b,c,dog,e,efd,zzzz"]
let strarr = ["hellocat", "apple,bat,goodbye,yellow,why,lloc"];
// let t = "worlcde"
// let temp = "world"

const checkcommon = function (t, temp) {
  // let num = -1;
  let flag = 0;
  // console.log(t.length)
  let len = t.length;
  let j = 0;
  let i = 0;
  while (j < t.length) {
    if (temp[i] === t[j]) {
      flag++;
      i++;
    }
    j++;
  }
  console.log(flag);
  return flag;
};

const allarr = function (strarr) {
  let t = strarr[0];
  let arr = strarr[1].split(",");
  let minarr = [];
  for (i of arr) {
    let commannum = checkcommon(t, i);
    if (i.length === commannum) {
      minarr.push(t.length - commannum);
    }
  }
  console.log(minarr);
  if (minarr.length === 0) {
    return -1;
  }
  return Math.min(...minarr);
};
// checkcommon(t,temp)
console.log(allarr(strarr));
