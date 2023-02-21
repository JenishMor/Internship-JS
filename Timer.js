// setTimeout(() => {
//   console.log("After 2 second");
// }, 2000);

let time = document.querySelector(".time");

setInterval(() => {
  let dt = new Date();
  //   console.log(`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`);
  let hour = `${
    dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()
  }`.padStart(2, 0);
  let min = `${dt.getMinutes()}`.padStart(2, 0);
  let second = `${dt.getSeconds()}`.padStart(2, 0);
  let type = dt.getHours() > 12 ? "PM" : "AM";
  time.innerHTML = `<h2>${hour}:${min}:${second} ${type}</h2>`;
}, 1000);
