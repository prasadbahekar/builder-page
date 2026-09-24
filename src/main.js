import './style.css'

const words = [
  "React",
  "Flutter",
  "Python",
  "HTML",
  "CSS",
  "JavaScipt",
  "Godot",
  "Arduino"
];

const wordElement = document.getElementById("word");
let index = 0;
setInterval(() => {
    wordElement.style.transform = "translateY(-100%)";
    wordElement.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];
        wordElement.style.transition = "none";
        wordElement.style.transform = "translateY(100%)";
        requestAnimationFrame(() => {
            wordElement.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            wordElement.style.transform = "translateY(-10%)";
            wordElement.style.opacity = "1";
        });
    }, 500);
}, 2000);

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    card.classList.toggle("active");
  });
});