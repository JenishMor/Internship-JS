const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2.
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// sarahDog.curFood >= sarahDog.recommendedFood
//   ? console.log("Eating too much")
//   : console.log("Eating too little");

console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood >= sarahDog.recommendedFood ? "much" : "little"
  }`
);

// 3.
let ownerEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

let ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownerEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(ownerEatTooMuch.join(" and ") + "'s dogs eat too much!");
console.log(ownersEatTooLittle.join(" and ") + "'s dogs eat too little!");

// 5.
let exactFood = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(exactFood);

// 6.
const okayFood = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(okayFood));

// 7.
console.log(dogs.filter(okayFood));

// 8.
let dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsCopy);
