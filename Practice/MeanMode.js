let arr = [4, 4, 4, 6, 2];

function meanMode(arr) {
  // For mean
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  let mean = sum / arr.length;

  // For mode
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]]++;
  }
  let objArr = [];
  for (let item in obj) {
    objArr.push([item, obj[item]]);
  }

  //   console.log(objArr);
  objArr.sort((a, b) => b[1] - a[1]);
  let mode = Number(objArr[0][0]);
  console.log(mean, mode);
  return mean === mode;
}
console.log(meanMode(arr));
