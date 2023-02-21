function FindIntersection(strArr) {
  let newArr2 = strArr[0].split(", ");
  let newArr4 = strArr[1].split(", ");

  let ansArr = [];
  for (const item of newArr2) {
    if (newArr4.includes(item)) {
      ansArr.push(item);
    }
  }
  if (ansArr.length === 0) {
    return "false";
  }
  let ansStr = ansArr.join(",");
  return ansStr;

  //   BruteForce approach
  //   for (let i = 0; i < newArr2.length; i++) {
  //     for (let j = 0; j < newArr4.length; j++) {
  //       if (newArr2[i] === newArr4[j]) {
  //         ansArr.push(newArr2[i]);
  //       }
  //     }
  //   }
  //   console.log(ansArr.join(","));
}

// let str = `["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]`;
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
