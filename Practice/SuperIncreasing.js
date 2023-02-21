function superIncreasing(arr) {
  let sum = 0;
  for (let item of arr) {
    if (item <= sum) {
      return false;
    }
    sum += item;
  }
  return true;
}

// console.log(superIncreasing([1, 3, 6, 13, 54]));
// console.log(superIncreasing([1, 2, 3, 4]));
// console.log(superIncreasing([1, 2, 5, 10]));

// --------------------------------------------------------------
function hammingDistance(strArr) {
  let str1 = strArr[0];
  let str2 = strArr[1];
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  return count;
}

// console.log(hammingDistance(["helloworld", "worldhello"]));
// console.log(hammingDistance(["10011", "10100"]));

// -------------------------------------------------------------------
function takeXOR(strArr) {
  let ans = "";
  let first = strArr[0];
  let second = strArr[1];
  for (let i = 0; i < first.length; i++) {
    ans += first[i] ^ second[i];
  }
  return ans;
}

// console.log(takeXOR(["100", "000"]));
// console.log(takeXOR(["00011", "01010"]));

// ---------------------------------------------------------------
function otherProducts(arr) {
  let ans = arr.reduce((mul, num) => mul * num, 1);
  let ansArr = [];
  for (let item of arr) {
    ansArr.push(ans / item);
  }
  return ansArr.join("-");
}

console.log(otherProducts([1, 2, 3, 4, 5]));
console.log(otherProducts([1, 4, 3]));
console.log(otherProducts([3, 1, 2, 6]));
