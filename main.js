import { changeDate } from "https://aasemshoshari1998.github.io/alarabiya/modules/changeDate.js";
import { changeTheme } from "https://aasemshoshari1998.github.io/alarabiya/modules/changeTheme.js";
import { changeLanguage } from "https://aasemshoshari1998.github.io/alarabiya/modules/changeLanguage.js";
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

localStorage.setItem("language", "ar");
localStorage.setItem("theme", "dark");

changeDate();
changeTheme();
changeLanguage();

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

const toggleLanguage = (e) => {
  const languageOptions = document.querySelector(".language-options");

  if (e.target.closest(".language")) {
    languageOptions.classList.toggle("hide");
  }
};
document.addEventListener("click", (e) => toggleLanguage(e));

const toEnglish = (e) => {
  if (e.target.closest(".english")) {
    e.target.closest(".language").remove();
    localStorage.setItem("language", "en");
    changeDate();
    changeLanguage();
  }
};

const toArabic = (e) => {
  if (e.target.closest(".arabic")) {
    e.target.closest(".language").remove();
    localStorage.setItem("language", "ar");
    changeDate();
    changeLanguage();
  }
};

document.addEventListener("click", (e) => toEnglish(e));
document.addEventListener("click", (e) => toArabic(e));
