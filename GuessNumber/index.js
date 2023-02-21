// Generating random number
let randomNum = (val) => {
  return Math.floor(Math.random() * val) + 1;
};

let num;

// Default valueA
num = randomNum(10);

// Otherwise range generate from selected option
let range = document.querySelector("#range");
range.addEventListener("change", () => {
  // console.log(range.value);
  num = randomNum(range.value);
  // console.log(num);
});
// console.log(num);

let check = document.querySelector(".check");
const again = document.querySelector(".again");

let score = 20;

// For displaying message
function displayMsg(msg) {
  document.querySelector(".message").textContent = msg;
}

function getRange(n) {
  console.log("Range button clicked");
  console.log(n);
}

// When user click on the again button
again.addEventListener("click", () => {
  score = 20;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  // msg.textContent = "Start guessing...";
  displayMsg("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  num = randomNum();
  // console.log(num);
  document.querySelector(".number").textContent = "?";
});

// If user click on the check button
check.addEventListener("click", () => {
  // let range = document.querySelector("#range").value;
  // console.log(range);
  const guess = Number(document.querySelector(".guess").value);
  let highScore = Number(document.querySelector(".highscore").textContent);
  // If there is no number entered
  if (!guess) {
    // msg.textContent = "⛔ No Number!";
    displayMsg("⛔ No Number!");
  }
  // If user guess it right
  else if (guess === num) {
    highScore = Math.max(score, highScore);
    document.querySelector(".highscore").textContent = highScore;

    // msg.textContent = "🎉 Correct";
    displayMsg("🎉 Correct");
    document.querySelector(".number").textContent = num;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  // If user guess it wrong
  else if (guess !== num) {
    // If score is not zero then
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      // guess < num
      //   ? (msg.textContent = "📉 Too low")
      //   : (msg.textContent = "📈 Too high");
      displayMsg(guess < num ? "📉 Too low" : "📈 Too high");
    }
    // If score is zero user lose the game
    else {
      // msg.textContent = "You lost the game!😢";
      displayMsg("You lost the game!😢");
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if (guess < num) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //     msg.textContent = "📉 Too low";
  //   } else {
  //     msg.textContent = "You lost the game!😢";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess > num) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //     msg.textContent = "📈 Too high";
  //   } else {
  //     msg.textContent = "You lost the game!😢";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
