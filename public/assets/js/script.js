document.addEventListener("DOMContentLoaded", () => {
  // Your code here will run after the DOM is ready.
  // Example: Initialize UI elements, attach event listeners, etc.
  const toggleElement = document.getElementById("menuBtn");

  const menuLink = document.getElementsByClassName("menuLink");
  menuLink.addEventListener("click", () => {
    if (
      toggleElement.style.display === "none" ||
      toggleElement.style.display === ""
    ) {
      toggleElement.style.display = "block";
    } else {
      toggleElement.style.display = "none";
    }
  });
});
