function letterChange(str) {
  //   let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowel = "aeiouAEIOU";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] < "z") || (str[i] >= "A" && str[i] < "Z")) {
      let newChar = String.fromCharCode(str[i].charCodeAt(0) + 1);
      if (vowel.includes(newChar)) {
        newStr += newChar.toUpperCase();
      } else {
        newStr += newChar;
      }
    } else if (str[i] === "z") {
      newStr += "a";
    } else if (str[i] === "Z") {
      newStr += "A";
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

// console.log(String.fromCharCode("a".charCodeAt(0) + 1));
// "hello*3"
letterChange("hello*3");
letterChange("Hezlo*3");
letterChange("fun times!");
