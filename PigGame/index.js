// Function for generating random number
function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");

let img = document.querySelector(".img");

let player_0 = document.querySelector(".player--0");
let player_1 = document.querySelector(".player--1");

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;
let playing = true;

// When player switch
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).innerHTML = 0;
  currentScore = 0; //Make that player's current score 0
  activePlayer = activePlayer === 0 ? 1 : 0; //If user is 0(First-player) then make it 1(Second-player) and vice a versa
  player_0.classList.toggle("player--active"); //Toggle background color
  player_1.classList.toggle("player--active");
}

// When user click on roll dice button
roll.addEventListener("click", () => {
  if (playing) {
    let num = randomNum();
    img.innerHTML = `<img src="dice-${num}.png" alt="Playing dice" class="dice" />`;
    // When dice number is not equals to 1 then we just simply add that number in player's current score and show them in Dom
    if (num !== 1) {
      currentScore += num;
      document.getElementById(`current--${activePlayer}`).innerHTML =
        currentScore;
    }
    // If dice number is 1 then we just switch the player
    else {
      switchPlayer();
    }
  }
});

// When user click on hold score button
hold.addEventListener("click", () => {
  if (playing) {
    // We store that score in the array which have two entries (0 for player 1, and 1 for player 2)
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerHTML =
      scores[activePlayer];

    // Declaring winner when any player cross the mark of 100 score
    if (scores[activePlayer] >= 100) {
      //Here we make playing false for stop playing
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      img.innerHTML = ``;
    } else {
      switchPlayer();
    }
  }
});

// Resetting game
newBtn.addEventListener("click", () => {
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.getElementById(`current--0`).innerHTML = 0;
  document.getElementById(`current--1`).innerHTML = 0;
  document.getElementById("score--0").innerHTML = 0;
  document.getElementById("score--1").innerHTML = 0;
});
