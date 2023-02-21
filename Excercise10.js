// This challenge is based on various Array method

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  let dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  let concatArr = dogsJuliaCorrected.concat(dogsKate);
  console.log(concatArr);

  concatArr.forEach((value, key) => {
    if (value >= 3) {
      console.log(
        `Dog number ${key + 1} is an adult, and is ${value} years old`
      );
    } else {
      console.log(`Dog number ${key + 1} is still a puppy`);
    }
  });
}

checkDogs(dogsJulia, dogsKate);
