function LongestIncreasingSequence(arr) {
  let n = arr.length;
  let tails = new Array(n).fill(0);
  let size = 0;
  for (let x of arr) {
    let i = 0,
      j = size;
    console.log(i, j);
    while (i !== j) {
      let m = Math.floor((i + j) / 2);
      if (tails[m] < x) {
        i = m + 1;
      } else {
        j = m;
      }
    }
    tails[i] = x;
    size = Math.max(i + 1, size);
  }
  return size;
}

console.log(LongestIncreasingSequence([4, 3, 5, 1, 6]));
