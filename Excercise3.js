let inp = document.getElementById("input");
let btn = document.getElementById("btn");

console.log(btn);
btn.addEventListener("click", () => {
  console.log(inp.value);
  let text = inp.value;
  let textArr = text.split("\n");
  console.log(textArr);
  //   for (const item of textArr) {
  //     let itemArr = item.split("_");
  //     let capitalize = itemArr[1].replace(
  //       itemArr[1][0],
  //       itemArr[1][0].toUpperCase()
  //     );
  //     let ansArr = itemArr[0].trimStart(" ") + capitalize;
  //     // itemArr.push(itemArr[0].trimStart(" ") + capitalize);
  //     // inp.append(itemArr);
  //     console.log(ansArr);
  // }
  for (const [i, item] of textArr.entries()) {
    const [first, second] = item.toLowerCase().trim().split("_");
    const ans = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${ans.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
