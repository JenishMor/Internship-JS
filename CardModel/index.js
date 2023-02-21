let btns = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");
let h1 = document.querySelector("h1");

let next = document.querySelector(".btn-next");
let prev = document.querySelector(".btn-prev");

const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

// for (const [i, btn] of btns.entries()) {
//   console.log(i);
//   btn.addEventListener("click", () => {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//     h1.innerHTML = `I'm a modal window ${i + 1} 😍`;
//   });
// }

function btnClick(n) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  h1.innerHTML = `I'm a modal window ${n} 😍`;

  if (n <= 1) {
    prev.classList.add("disable");
    next.classList.remove("disable");
  }
  if (n >= 3) {
    next.classList.add("disable");
    prev.classList.remove("disable");
  }
  if (n == 2) {
    next.classList.remove("disable");
    prev.classList.remove("disable");
  }

  next.addEventListener("click", () => {
    next.classList.remove("disable");
    prev.classList.remove("disable");
    n = n + 1;
    h1.innerHTML = `I'm a modal window ${n} 😍`;
    if (n >= 3) {
      next.classList.add("disable");
    }
  });
  prev.addEventListener("click", () => {
    prev.classList.remove("disable");
    next.classList.remove("disable");
    n = n - 1;
    h1.innerHTML = `I'm a modal window ${n} 😍`;
    if (n <= 1) {
      prev.classList.add("disable");
    }
  });
}

close.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
