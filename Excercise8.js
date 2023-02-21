let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

const printTemp = function (arr) {
  let str = "";
  for (const [i, item] of arr.entries()) {
    str += `...${item}ºC in ${i + 1} days`;
    // console.log(`${item}ºC in ${i + 1} days...`);
  }
  console.log(str + "...");
};

printTemp(data2);
