// for toggle menu in responsive smaller screens
let navbar = document.querySelector(".nav1");
let navbar2 = document.querySelector(".navbar2");
let menuBtn = document.querySelector("#menuBtn");
// const menubtn = document.querySelector(".btn");

menuBtn.onclick = () => {
  if (navbar.classList.contains("hide")) {
    navbar.classList.remove("hide");
    navbar2.classList.remove("show");
    console.log("i am if");
  } else {
    navbar.classList.add("hide");
    navbar2.classList.add("show");

    console.log("I am elseo");
  }
};
// for toggle menubar
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
let icons = document.querySelector("#line3");
toggle.addEventListener("click", () => nav.classList.toggle("active"));
// toggle.onclick = () => {
//   if (nav.classList.contains("active")) {
//     nav.classList.remove("active");
//     icons.style.visibility = "visible";
//     console.log("none");
//   } else {
//     nav.classList.add("active");
//     icons.style.visibility = "hidden";
//     console.log("block");
//   }
// };

console.log("code completed");

// if (nav.classList.contains("active")) {
//   icons.classList.remove("line");
//   console.log("none");
// } else {
//   console.log("block1");
//   icons.classList.add("line");
//   console.log("block2");
// }
// console.log("code not completed");
