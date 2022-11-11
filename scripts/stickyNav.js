window.onscroll = function () {
  myFunction();
};

const navbar = document.querySelector(".nav-container");
const sticky = navbar.offsetTop;
const header = document.querySelector(".header");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.padding = "2rem 5%";
  } else {
    navbar.classList.remove("sticky");
  }
}
