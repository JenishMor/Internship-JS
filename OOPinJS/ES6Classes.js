class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const jenish = new Person("Jenish", 2001);
console.log(jenish);
jenish.calcAge();

// console.log(jenish.__proto__ === Person.prototype);

Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jenish.greet();
