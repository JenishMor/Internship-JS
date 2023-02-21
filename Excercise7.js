const mark = {
  Name: "Mark Miller",
  Mass: 78,
  Height: 1.69,
  calcBMI: function () {
    this.bmi = this.Mass / this.Height ** 2;
    return this.bmi;
  },
};

const john = {
  Name: "John Smith",
  Mass: 92,
  Height: 1.95,
  calcBMI: function () {
    this.bmi = this.Mass / this.Height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI(${mark.bmi}) is higher than John's(${john.bmi})`);
} else {
  console.log(`John's BMI(${john.bmi}) is higher than Mark's(${mark.bmi})`);
}
