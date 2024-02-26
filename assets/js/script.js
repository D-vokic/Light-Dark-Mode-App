const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// ! Solution for the smooth scrolling
// Select all links within the document
const links = document.querySelectorAll("a");

// Iterate through all links and add event listener
links.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Define the smoothScroll function
function smoothScroll(e) {
  // Prevent the default behavior of the link
  e.preventDefault();

  // Get the target destination to scroll to
  const targetId = this.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;

  // Use the window.scrollTo method for smooth scrolling
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

// Dark or Light Images
function imageMode(color) {
  image1.src = `./assets/img/undraw_proud_coder_${color}.svg`;
  image2.src = `./assets/img/undraw_feeling_proud_${color}.svg`;
  image3.src = `./assets/img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
