function countingMinutes(str) {
  let timeStr = str.split("-");
  console.log(timeStr);
  let ansArr = [];
  for (let item of timeStr) {
    let time = parseInt(item);
    let typeArr = item.split(":");

    let minutes = parseInt(typeArr[1].slice(0, 3));
    let type = typeArr[1].slice(-2);

    if (type === "pm") {
      time += 12;
    }
    ansArr.push(time * 60 + minutes);
  }
  if (ansArr[0] > ansArr[1]) {
    // console.log(1440 + (ansArr[1] - ansArr[0]));
    return 1440 + (ansArr[1] - ansArr[0]);
  }
  //   if (ansArr[0] < ansArr[1]) {
  //     console.log(ansArr[1] - ansArr[0]);
  //   }
  return ansArr[1] - ansArr[0];
}

// console.log(countingMinutes("9:00am-10:00am"));
console.log(countingMinutes("9:00am-10:00am"));
console.log(countingMinutes("1:00pm-11:00am"));
console.log(countingMinutes("12:30pm-12:00am"));
console.log(countingMinutes("1:23am-1:08am"));
