const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

dark.addEventListener("click", (e) => {
  e.target.classList.add("on");
  light.classList.remove("on");
  localStorage.setItem("theme", "dark");
  changeTheme();
});

light.addEventListener("click", (e) => {
  e.target.classList.add("on");
  dark.classList.remove("on");
  localStorage.setItem("theme", "light");
  changeTheme();
});
