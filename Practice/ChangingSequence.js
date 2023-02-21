function changeSequence(arr) {
  const type = arr[0] < arr[1] ? "increasing" : "decreasing";

  for (let i = 0; i < arr.length; i++) {
    if (type === "increasing") {
      if (arr[i] > arr[i + 1]) {
        return i;
      }
    }
    if (type === "decreasing") {
      if (arr[i] < arr[i + 1]) {
        return i;
      }
    }
  }
  return -1;
}

console.log(changeSequence([5, 4, 3, 2, 10, 11]));
console.log(changeSequence([1, 2, 4, 6, 4, 3, 1]));
console.log(changeSequence([-4, -2, 9, 10]));
