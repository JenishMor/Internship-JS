// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`Speed of the ${this.make} is: ${this.speed} Km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(
//     `After applying break speed of the ${this.make} is: ${this.speed} Km/h`
//   );
// };

// const Bmw = new Car("BMW", 120);
// Bmw.accelerate();
// Bmw.brake();
// Bmw.accelerate();
// Bmw.accelerate();
// Bmw.brake();

// const Mercedes = new Car("Mercedes", 95);
// Mercedes.accelerate();
// Mercedes.accelerate();
// Mercedes.brake();
// Mercedes.accelerate();
// Mercedes.brake();

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`Speed of the ${this.make} is: ${this.speed} Km/h`);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(
      `After applying break speed of the ${this.make} is: ${this.speed} Km/h`
    );
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const Ford = new Car("Ford", 120);
console.log(Ford.speedUS);
Ford.speedUS = 50;
console.log(Ford);
