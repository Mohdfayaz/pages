// You can add interactivity here if needed
console.log("Page Loaded");
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been submitted!");
  });
