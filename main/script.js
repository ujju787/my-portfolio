// Setup and start animation
var typed = new Typed("#elements", {
  strings: ["Programmer", "Web Developer", "Web Designer"],
  typeSpeed: 50,
});
const audio1 = document.getElementById("developer-song");
const audio2 = document.getElementById("bgm");
const tag = document.getElementById("musictag");
const logo = document.getElementById("img");

const play = document.querySelector("body");

play.onclick = () => {
  if (audio1.paused) {
    audio1.play();
    tag.textContent = "Playing music 🎉🎶";
    audio2.pause();
  } else {
    audio2.pause();
    audio1.pause();
    tag.textContent = " ";
  }
};

play.ondblclick = () => {
  if (audio2.paused) {
    audio1.pause();
    tag.textContent = "Playing music 🎉🎶";
    audio2.play();
  } else {
    audio1.pause();
    audio2.pause();
    tag.textContent = " ";
  }
};
function rotation() {
  if (audio1.play) {
    logo.classList.toggle("rotate");
  } else {
    logo.classList.toggle("no-rotate");
  }
}
