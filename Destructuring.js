"use strict";

let restaurant = {
  name: "Rest",
  location: "ontario",
  categories: ["Italian", "Pizzeria", "Vegitarian", "Organic"],
  starter: ["Bruschetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (start, end) {
    return [this.starter[start], this.mainMenu[end]];
  },
  orderDelivery: function ({ start, end, time, address }) {
    console.log(
      `Ordre received! ${this.starter[start]} and ${this.mainMenu[end]} will be deivered to ${address} at ${time}`
    );
  },
};

// Object Destructuring
// restaurant.orderDelivery({
//   time: "10:30",
//   address: "Via del sole, 21.",
//   start: 0,
//   end: 1,
// });

// let [a, , b] = restaurant.categories;
// console.log(a, b);

// [b, a] = [a, b];
// console.log(a, b);

// console.log(restaurant.order(0, 1));

// Spread Operator
let arr = [4, 5, 6];
// let newArr = [1, 2, 3, arr];
let newArr = [1, 2, 3, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

const menu = [...restaurant.starter, ...restaurant.mainMenu];
console.log(menu);

// Iterables: array, strings, maps, sets
const str = "Jenish";
const characters = [...str, "h", "i", "i"];
console.log(characters);

// Create new object with spread operator
let newObj = { foundIn: 1998, ...restaurant, founder: "john" };
console.log(newObj);

// Rest Operator
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starter,
];
console.log(Pizza, Risotto, otherFood);

// Rest operator in functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  //   numbers.forEach((ele) => {
  //     sum += ele;
  //   });
  for (const i of numbers) {
    sum += i;
  }
  return sum;
};

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));
