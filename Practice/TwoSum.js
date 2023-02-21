function twoSum(arr) {
  let target = arr[0];
  let ansArr = [];
  for (let i = 1; i < arr.length; i++) {
    let ans = "";
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        ans = arr[i].toString() + "," + arr[j].toString();
      }
    }
    if (ans) {
      ansArr.push(ans);
    }
  }
  //   console.log(ansArr);
  console.log(ansArr.join(" "));
}

twoSum([7, 3, 5, 2, -4, 8, 11]);
twoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]);
twoSum([7, 6, 4, 1, 7, -2, 3, 12]);
