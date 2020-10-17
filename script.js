const navbar = document.querySelector(".main-head");
const offset = navbar.offsetHeight;
  
const scroll = () => {
    const scrolled = document.body.scrollTop >= offset || document.documentElement.scrollTop >= offset;
    scrolled ? navbar.classList.add("scrolled") : navbar.classList.remove("scrolled");
};

window.addEventListener('scroll', scroll);
// nav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}