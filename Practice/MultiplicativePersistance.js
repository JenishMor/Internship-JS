function multiplication(num) {
  return num
    .toString()
    .split("")
    .reduce((mul, n) => mul * Number(n), 1);
}

function persistance(num) {
  let res = num;
  let count = 0;
  while (res > 9) {
    res = multiplication(res);
    count++;
  }
  return count;
}

console.log(persistance(25));
