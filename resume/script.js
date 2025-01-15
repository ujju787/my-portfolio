// Detect screen size and adjust layout dynamically
function adjustLayout() {
  const screenWidth = window.innerWidth;
  // Get references to the sections
  const edu = document.querySelector("#edu");
  const pro = document.querySelector("#pro");
  const sec = document.querySelector("#sec");

  // If screen width is less than 600px, hide some sections
  if (screenWidth < 768) {
    edu.style.display = "flex";
    pro.style.display = "flex";
    sec.style.display = "flex";
  } else {
    edu.style.display = "grid";
    pro.style.display = "grid";
    sec.style.display = "grid";
  }
}

// Run the adjustLayout function on page load and when resizing the window
window.addEventListener("resize", adjustLayout);
window.addEventListener("load", adjustLayout);

// function for printing the page
function printPage() {
  var resume = document.querySelector("#btn");
  var sound = document.querySelector("#click");
  if ((resume.style.display = "flex")) {
    sound.play();
    resume.style.display = "none";
    window.print();
    resume.style.display = "flex";
  }
}
// styleing the print button
let btn = document.querySelector("button");
btn.style.width = "7vw";
btn.style.height = "5vh";
