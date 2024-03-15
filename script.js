const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);
const purple = rootStyles.getPropertyValue("--purple");
const red = rootStyles.getPropertyValue("--red");
const white = rootStyles.getPropertyValue("--white");
const black = rootStyles.getPropertyValue("--black");
const otherpurple = rootStyles.getPropertyValue("--otherpurple");
const otherred = rootStyles.getPropertyValue("--otherred");
const dark = document.querySelector(".darkMoon");
const darkStyles = getComputedStyle(dark);
const light = document.querySelector(".lightSun");
const lightStyles = getComputedStyle(light);
const theme = localStorage.getItem("theme");

function darkMode() {
  root.style.removeProperty("--purple");
  root.style.removeProperty("--red");
  root.style.setProperty("--purple", "#ff528c");
  root.style.removeProperty("--white");
  root.style.removeProperty("--black");
  root.style.setProperty("--white", "#000000");
  //   root.style.setProperty("--black", "#fae5ff");
  root.style.removeProperty("--otherpurple");
  root.style.removeProperty("--otherred");
  root.style.setProperty("--otherpurple", "#330011");
  dark.style.removeProperty("display");
  dark.style.setProperty("display", "none");
  light.style.setProperty("display", "");
}

function lightMode() {
  root.style.removeProperty("--purple");
  root.style.removeProperty("--red");
  root.style.setProperty("--red", "#8c52ff");
  root.style.removeProperty("--white");
  root.style.removeProperty("--black");
  root.style.setProperty("--black", "#fae5ff");
  //   root.style.setProperty("--white", "#000000");
  root.style.removeProperty("--otherpurple");
  root.style.removeProperty("--otherred");
  root.style.setProperty("--otherred", "#aa80ff");
  light.style.removeProperty("display");
  light.style.setProperty("display", "none");
  dark.style.setProperty("display", "");
}

lightMode();
dark.addEventListener("click", darkMode);
light.addEventListener("click", lightMode);
