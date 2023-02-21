function minArr(strArr) {
  let arr = [];
  let ansArr = [];
  for (let i of strArr) {
    if (i >= "0" && i <= "9") {
      arr.push(i);
    }
    if (i === "E") {
      // Sorting array in descending order
      arr.sort((a, b) => b - a);
      let ans = arr.pop();
      ansArr.push(ans);
    }
  }
  return ansArr.join(",");
}

console.log(minArr(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"]));
console.log(minArr(["1", "2", "E", "E", "3"]));
console.log(minArr(["4", "E", "1", "E", "2", "E", "3", "E"]));
