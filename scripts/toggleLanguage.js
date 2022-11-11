import { changeDate } from "../modules/changeDate.js";
import { changeLanguage } from "../modules/changeLanguage.js";

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
