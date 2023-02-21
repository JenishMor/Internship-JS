function thirdGreatest(strArr) {
  return strArr.sort((a, b) => b.length - a.length)[2];
}

console.log(thirdGreatest(["coder", "byte", "code"]));
