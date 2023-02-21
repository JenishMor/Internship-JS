// This challenge is based on Map, Filter and Reduce method

let dogAge = [5, 2, 4, 1, 15, 8, 3];

function calcAverageHumanAge(dogAge) {
  const humanAge = dogAge.map((val) => (val <= 2 ? 2 * val : 16 + val * 4));
  console.log(humanAge);

  let adults = humanAge.filter((val) => val >= 18);
  console.log(adults);

  const avg = adults.reduce((acc, val, i, arr) => acc + val / arr.length, 0);
  console.log(avg);
}
calcAverageHumanAge(dogAge);
