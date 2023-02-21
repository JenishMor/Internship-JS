function secondGreatLow(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr.length);
  if (arr.length === 2) {
    console.log(arr[0], arr[1]);
  }

  let ansArr = [];
  for (let i = 1; i < arr.length; i++) {
    // console.log(arr[i], arr[i - 1]);
    if (arr[i - 1] !== arr[i]) {
      ansArr.push(arr[i]);
      break;
    }
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i - 1] !== arr[i]) {
      ansArr.push(arr[i]);
      break;
    }
  }
  console.log(...ansArr);
}

secondGreatLow([1, 42, 42, 180]);
secondGreatLow([7, 7, 12, 98, 106]);
secondGreatLow([4, 90]);
