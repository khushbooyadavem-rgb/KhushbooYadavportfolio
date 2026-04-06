/* TYPING EFFECT */

const text = ["Frontend Developer", "Web Designer", "JavaScript Learner"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 80);
  }
})();

/* SCROLL ANIMATION */

window.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-box,.project-card").forEach((el) => {
    let pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
