import './style.css'

const timeEl = document.getElementById("time");

const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
    timeEl.textContent = `TIME: ${hours}:${minutes}:${seconds}:${milliseconds}`;
}

updateTime();
setInterval(updateTime, 10);

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