// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

const calcAverage = (first, second, third) => (first + second + third) / 3;

// const calcAverage = (...numbers) => {
//   let sum = 0;
//   for (const i of numbers) {
//     sum += i;
//   }
//   let avg = sum / 3;
//   return avg;
// };

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win the game (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgDolphins < avgKoalas) {
    console.log(`Koalas win the game (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`It's a draw (${avgKoalas} vs ${avgDolphins})`);
  }
};

let dolphihns = calcAverage(85, 54, 41);
let koalas = calcAverage(23, 34, 27);
console.log(dolphihns);
console.log(koalas);
checkWinner(dolphihns, koalas);
