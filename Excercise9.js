const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let userInput = Number(
      prompt(
        `${this.question} \n${this.options.join("\n")} \n(Write option number) `
      )
    );
    console.log(userInput);

    // Check weather input number is valid or not 
    typeof userInput === "number" &&
      userInput < this.options.length &&
      this.answers[userInput]++;

    this.displayResult();
    this.displayResult("string");
  },

  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

const btn = document.querySelector(".answer");
// btn.addEventListener("click", () => {
//   poll.registerNewAnswer();
// });
btn.addEventListener("click", poll.registerNewAnswer.bind(poll));

// let inp = poll.registerNewAnswer();
// console.log(inp);
// poll.answers[inp]++;
// console.log(poll.answers);
