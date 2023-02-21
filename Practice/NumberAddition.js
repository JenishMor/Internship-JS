function numberAddition(str) {
  //   console.log(parseInt(str));
  //   let strArr = str.split("");
  //   console.log(strArr);

  //   This regex is for fetching all numbers from string
  var numbers = str.match(/\d+/g) || [];
  console.log(numbers);
  let ans = numbers.reduce((sum, number) => sum + Number(number), 0);
  console.log(ans);
}

let str = "75Number9";
numberAddition(str);
