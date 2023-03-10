const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1>
let [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);

// 2>
const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// 3>
const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// 4>
const playersFinal = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(playersFinal);

// 5>
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6>
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

// 7>
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");