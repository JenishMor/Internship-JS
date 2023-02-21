function arrayMatching(strArr) {
  let [arr1, arr2] = [strArr[0].match(/\d+/g), strArr[1].match(/\d+/g)];
  //   console.log(arr1);
  //   console.log(arr2);
  let newArr = [];
  let n = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < n; i++) {
    // console.log(arr1[i], arr2[i]);
    if (arr1[i] && arr2[i]) {
      newArr.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      newArr.push(arr1[i] || arr2[i]);
    }
  }
  console.log(newArr.join("-"));
}

// arrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]);
// arrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]);
// arrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]);

// ---------------------------------------------------------------------------------------------------

function reverseBinary(num) {
  // Here we convert into binary
  let binary = Number.parseInt(num, 10).toString(2);
  //   console.log(binary);

  //   Here we get binary number which length is modulo 8
  let myBinary = binary.padStart(binary.length + (8 - (binary.length % 8)), 0);
  //   console.log(myBinary);

  // Here we perform reverse operation on string
  let revBinary = myBinary.toString().split("").reverse().join("");
  return Number.parseInt(revBinary, 2).toString(10);
}

let num = "4567";
console.log(reverseBinary(num));
