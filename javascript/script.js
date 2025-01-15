// logoFetch the navbar HTML fragment
fetch("../navbar/index.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load navbar: ${response.status}`);
    }
    return response.text();
  })
  .then((html) => {
    document.querySelector("#nav-container").innerHTML = html;
    // Dynamically execute scripts from the loaded HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const scripts = doc.querySelectorAll("script");

    scripts.forEach((script) => {
      const newScript = document.createElement("script");
      if (script.src) {
        newScript.src = script.src; // For external scripts
      } else {
        newScript.textContent = script.textContent; // For inline scripts
      }
      document.body.appendChild(newScript);
    });
  })
  .catch((error) => {
    console.error("Error loading the navbar:", error);
  });

// document.addEventListener("DOMContentLoaded", function () {
//   // Fetch the navbar.html file
//   fetch("../navbar/index.html")
//     .then((response) => response.text())
//     .then((data) => {
//       // Insert the navbar HTML into the container
//       document.getElementById("navbar").innerHTML = data;

//       // Dynamically add the CSS file to the page
//       let link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "../navbar/style.css";
//       document.head.appendChild(link);

//       // Dynamically add the JS file to the page
//       let script = document.createElement("script");
//       script.src = "../navbar/script.js";
//       document.body.appendChild(script);
//     })
//     .catch((error) => console.error("Error loading navbar:", error));
// });
