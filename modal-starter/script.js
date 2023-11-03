"use strict";

const showModals = document.querySelectorAll(".show-modal");
const hidden = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

for (let i of showModals) {
  i.addEventListener("click", (e) => {
    console.log(e);
    hidden.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeModal.addEventListener("click", (ev) => {
  console.log(ev);
  hidden.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    hidden.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

overlay.addEventListener("click", () => {
  hidden.classList.add("hidden");
  overlay.classList.add("hidden");
});
