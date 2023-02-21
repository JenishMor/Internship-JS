// Bracket Combinations
// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero,
// and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3,
// then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()).
// There are 5 total combinations when the input is 3, so your program should return 5.

// Input: 3
// Output: 5

function fact(num) {
  let factNum = num === 0 || num === 1 ? num : num * fact(num - 1);
  return factNum;
}

// Formula for all valid combinations
// (1/n+1) * (2n! / n! * n!)

function bracketCombinations(num) {
  let ans = (1 / (num + 1)) * (fact(2 * num) / (fact(num) * fact(num)));
  return ans;
}

console.log(bracketCombinations(4));
