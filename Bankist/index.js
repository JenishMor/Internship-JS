console.log("This is js file for bankist app");

// Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2023-01-28T23:36:17.929Z",
    "2023-01-31T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

// const accounts = [account1, account2, account3, account4];
const accounts = [account1, account2];

let user = document.querySelector(".login__input--user");
let pin = document.querySelector(".login__input--pin");
const loginBtn = document.querySelector(".login__btn");

const movementsCont = document.querySelector(".movements");
const balanceLabel = document.querySelector(".balance__value");

const inLabel = document.querySelector(".summary__value--in");
const outLabel = document.querySelector(".summary__value--out");
const interestLabel = document.querySelector(".summary__value--interest");

let welcomeLabel = document.querySelector(".welcome");
const app = document.querySelector(".app");

let inputTransferTo = document.querySelector(".form__input--to");
let inputTransferAmount = document.querySelector(".form__input--amount");
let btnTransfer = document.querySelector(".form__btn--transfer");

let inputCloseUser = document.querySelector(".form__input--user");
let inputClosePin = document.querySelector(".form__input--pin");
let btnClose = document.querySelector(".form__btn--close");

let inputLoanAmt = document.querySelector(".form__input--loan-amount");
let btnLoan = document.querySelector(".form__btn--loan");
let btnSort = document.querySelector(".btn--sort");

let dateLabel = document.querySelector(".date");

let timerLabel = document.querySelector(".timer");

function formatMovementDate(dt) {
  // console.log(dt);
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), dt);
  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const day = `${dt.getDate()}`.padStart(2, 0);
  const month = `${dt.getMonth() + 1}`.padStart(2, 0);
  const year = dt.getFullYear();
  return `${day}/${month}/${year}`;
}

// Using internationalizing API formatting currency
const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

// Displaying all transaction of account
const displayMovements = (acc, sort = false) => {
  movementsCont.innerHTML = "";
  let moves = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  moves.forEach((value, key) => {
    const date = new Date(acc.movementsDates[key]);
    const type = value > 0 ? "deposit" : "withdrawal";
    const formatedMov = formatCurrency(value, acc.locale, acc.currency);
    let html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      key + 1
    } ${type}</div>
                    <div class="movements__date">${formatMovementDate(
                      date
                    )}</div>
                    <div class="movements__value">${formatedMov}</div>
                    </div>`;
    movementsCont.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

// Creating username
const createUserName = (accs) => {
  accs.forEach((acc) => {
    // Here we convert into username from owner name
    acc.user = acc.owner
      .toLowerCase()
      .split(" ")
      .map((value) => value[0])
      .join("");
  });
};

createUserName(accounts);
console.log(accounts);

// Function for displaying total amount
const calcDisplayBalance = (acc) => {
  // Here we use reduce function to sum up all movements
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const formatedMov = formatCurrency(acc.balance, acc.locale, acc.currency);
  balanceLabel.textContent = formatedMov;
};

// calcDisplayBalance(account1.movements);

// Function to calculate summary
const calcDisplaySummary = (acc) => {
  // Here we use internationalizing API for format currency
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  inLabel.innerHTML = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  outLabel.innerHTML = formatCurrency(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposite) => (deposite * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  interestLabel.innerHTML = formatCurrency(interest, acc.locale, acc.currency);
};

// calcDisplaySummary(account1.movements);

// Updating UI after every transfer
let updateUI = (acc) => {
  // Display movements
  displayMovements(acc);

  // Display Balance
  calcDisplayBalance(acc);

  // Display all summary
  calcDisplaySummary(acc);
};

let currUser, timer;

// currUser = account1;
// updateUI(currUser);
// app.style.opacity = "1";

const startLogoutTimer = () => {
  const tick = () => {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let second = String(time % 60).padStart(2, 0);

    // In each call print the remaining time to the UI
    timerLabel.innerHTML = `${min}:${second}`;

    // When 0 sec then stop the timer and log out user
    if (time === 0) {
      clearInterval(timer);
      app.style.opacity = "0";
      welcomeLabel.innerHTML = "Log in to get started";
    }

    // Decrease time by 1 sec
    time--;
  };

  // Set time to 5 min
  let time = 5 * 60;

  // Here we call this immediate
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// Login user
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userVal = user.value;
  const pinVal = Number(pin.value);

  // Here we authenticate user
  currUser = accounts.find((acc) => acc.user === userVal && acc.pin === pinVal);
  console.log(currUser);

  // If currUser is exist then display that user (Otherwise nothing happened)
  if (currUser) {
    // startLogoutTimer();
    // Display current date and time when user logged in
    // let date = new Date();
    // console.log(date);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // const hour = `${
    //   date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    // }`.padStart(2, 0);
    // const min = `${date.getMinutes()}`.padStart(2, 0);
    // let type = date.getHours() < 12 ? "AM" : "PM";

    // let currDate = `${day}/${month}/${year}, ${hour}:${min} ${type}`;
    // dateLabel.innerHTML = currDate;

    // -----------OR----------------(For displaying date)

    // Experimenting API
    const date = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    };

    const locale = navigator.language;
    // Instead of this we direct write this.locale in DateTimeFormat
    dateLabel.innerHTML = new Intl.DateTimeFormat(locale, options).format(date);

    user.value = pin.value = "";
    welcomeLabel.innerHTML = `Welcome back, ${currUser.owner.split(" ")[0]}`;
    app.style.opacity = "1";

    // Update timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // displayMovements(currUser.movements);
    // calcDisplayBalance(currUser);
    // calcDisplaySummary(currUser);
    updateUI(currUser);
  }
});

// Transfering money from one acc. to another
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("Transfer button clicked");
  let receiverAcc = accounts.find((acc) => acc.user === inputTransferTo.value);
  let amt = Number(inputTransferAmount.value);

  inputTransferTo.value = inputTransferAmount.value = "";
  // Here we check all the condition and then perform transfer
  if (
    amt > 0 &&
    receiverAcc &&
    receiverAcc.user !== currUser.user &&
    amt <= currUser.balance
  ) {
    // Push transfer amount to the array
    currUser.movements.push(-amt);
    receiverAcc.movements.push(amt);

    // Push transfer date
    currUser.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Updating UI
    updateUI(currUser);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

// Close the particular account
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("Close button clicked");
  if (
    inputCloseUser.value === currUser.user &&
    Number(inputClosePin.value) === currUser.pin
  ) {
    inputCloseUser.value = inputClosePin.value = "";
    // console.log("Username and pin valid");

    // Here we finding index of account that we want to delete
    const index = accounts.findIndex(
      (acc) => acc.user === currUser.user && acc.pin === currUser.pin
    );
    // console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hiding UI
    app.style.opacity = "0";
  }
});

// Loan functionality
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Math.floor(Number(inputLoanAmt.value));
  if (amount > 0 && currUser.movements.some((mov) => mov >= amount * 0.1)) {
    setTimeout(() => {
      // console.log("Loan granted");
      // Push amount of loan to the array
      currUser.movements.push(amount);

      // Push loan date
      currUser.movementsDates.push(new Date().toISOString());

      // Updating UI
      updateUI(currUser);
      inputLoanAmt.value = "";

      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }
});

let sorted = false;
btnSort.addEventListener("click", () => {
  displayMovements(currUser, !sorted);
  sorted = !sorted;
});

// Excercise on this app
// 1.
// here we also use flatMap method
const bankDepositeSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((val) => val > 0)
  .reduce((sum, val) => sum + val, 0);

// console.log(bankDepositeSum);

// 2.
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((val) => val >= 1000);
// console.log(numDeposits1000);

// 3. Here we store total deposits and withdrawls in the object called sums
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawls += curr);
      sums[curr > 0 ? "deposits" : "withdrawls"] += curr;
      return sums;
    },
    { deposits: 0, withdrawls: 0 }
  );

// console.log(sums);

// 4.
const converTitle = (title) => {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const exceptions = ["a", "an", "the", "and", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (!exceptions.includes(word) ? capitalize(word) : word))
    .join(" ");
  return capitalize(titleCase);
};

// console.log(converTitle("this is a nice title"));
// console.log(converTitle("this is a LONG title BUt not too long"));
// console.log(converTitle("and here is another title with an EXAMPLE"));

// let str = "jenish";
// let newStr = str.replace(str[0], str[0].toUpperCase());
// console.log(newStr);
