import { themeObject } from "./themeObject.js";

export const changeTheme = (e) => {
  const theme = document.querySelector(".theme");
  const logo = document.querySelectorAll(".logo,.footer-logo");
  const alhadath = document.querySelector(".alhadath");
  const thirdSection = document.querySelector(".third-section");
  const dateAndLanguage = document.querySelector(".date-and-language");
  const mainSectionAsideElementSpan = document.querySelectorAll(
    ".main-section-aside-element-span"
  );
  const thirdSectionArticleElementInfosBottomLeft = document.querySelectorAll(
    ".third-section-article-element-infos-bottom-left"
  );
  const copyRight = document.querySelector(".copyright");
  document.body.style.backgroundColor = `${
    themeObject[localStorage.getItem("theme")].bodyBg
  }`;
  document.body.style.color = `${
    themeObject[localStorage.getItem("theme")].bodyColor
  }`;

  logo.forEach((l) => {
    l.src =
      document.documentElement.getAttribute("dir") === "rtl"
        ? `logo-ar-${themeObject[localStorage.getItem("theme")].logo}.png`
        : `logo-en-${themeObject[localStorage.getItem("theme")].logo}.png`;
  });

  alhadath.src = `alhadath-${
    themeObject[localStorage.getItem("theme")].logo
  }.png`;

  thirdSection.style.backgroundColor = `${
    themeObject[localStorage.getItem("theme")].thirdSectionBg
  }`;

  thirdSectionArticleElementInfosBottomLeft.forEach((e) => {
    e.style.backgroundColor = `${
      themeObject[localStorage.getItem("theme")]
        .thirdSectionArticleElementInfosBottomLeftBg
    }`;
  });
  dateAndLanguage.style.color = "#fff";
  mainSectionAsideElementSpan.forEach((e) => {
    e.style.color = "#fff";
  });
  theme.style.color = "#fff";
  copyRight.style.color = "#fff";
};
