const [markMass, markHeight] = [95, 1.88];
const [johnMass, johnHeight] = [85, 1.76];

const bmiCalculate = (mass, height) => {
  return mass / height ** 2;
};

const markHigherBMI = (markMass, markHeight, johnMass, johnHeight) => {
  const mark = bmiCalculate(markMass, markHeight);
  const john = bmiCalculate(johnMass, johnHeight);
  //   console.log(mark);
  //   console.log(john);
  //   return mark > john;
  if (mark > john) {
    console.log("Mark's BMI is higher than John's!");
  } else {
    console.log("John's BMI is higher than Mark's!");
  }
};

markHigherBMI(markMass, markHeight, johnMass, johnHeight);
