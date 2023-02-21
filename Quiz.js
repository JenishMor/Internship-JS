const quiz = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

console.log(quiz.get("question"));
for (const [key, value] of quiz) {
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}

const ans = Number(prompt("Your answer"));
console.log(ans);
alert(quiz.get(ans === quiz.get("correct")));
