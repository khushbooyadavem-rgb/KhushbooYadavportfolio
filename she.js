document.addEventListener("DOMContentLoaded", () => {
  const words = [
    "Khushboo Shailendra Yadav",
    "Web Developer",
    "Programmer",
    "Designer",
    "Creator",
    "Frontend Developer",
  ];

  let i = 0;
  let j = 0;
  let deleting = false;

  const el = document.querySelector(".typing");

  function typeEffect() {
    if (!el) return;

    let current = words[i];

    // typing
    if (!deleting) {
      el.textContent = current.substring(0, j++);
    }
    // deleting
    else {
      el.textContent = current.substring(0, j--);
    }

    // ✅ FULL SENTENCE STOP FOR 2 SEC
    if (!deleting && j === current.length + 1) {
      deleting = true;
      setTimeout(typeEffect, 2000); // pause
      return;
    }

    // move to next word
    if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, deleting ? 40 : 70);
  }

  typeEffect();
});
