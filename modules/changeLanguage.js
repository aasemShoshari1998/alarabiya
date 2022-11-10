import { languageObject } from "./modules/languageObject";
import { themeObject } from "./modules/themeObject";

export const changeLanguage = () => {
  const logo = document.querySelectorAll(".logo,.footer-logo");
  const alhadathContainer = document.querySelector(".alhadath-container");
  const liveBtn = document.querySelector(".live-btn");
  const captionText = document.querySelectorAll(".caption-text");
  const dateAndLanguage = document.querySelector(".date-and-language");
  const nav = document.querySelector(".nav");
  const footer = document.querySelector(".footer");
  const mainSectionAsideElementParagraph = document.querySelectorAll(
    ".main-section-aside-element-paragraph"
  );
  const mainSectionAsideElementSpan = document.querySelectorAll(
    ".main-section-aside-element-span"
  );
  const sectionSecondTitle = document.querySelectorAll(".section-second-title");
  const sectionSecondArticleElementParagraph = document.querySelectorAll(
    ".section-second-article-element-paragraph"
  );
  const thirdSectionHeaderRight = document
    .querySelector(".third-section-header-right")
    .querySelectorAll("h2");
  const thirdSectionHeaderLeft = document
    .querySelector(".third-section-header-left")
    .querySelectorAll(".today, .this-week");
  const thirdSectionArticleElementInfosTitle = document.querySelectorAll(
    ".third-section-article-element-infos-title"
  );
  const thirdSectionArticleElementInfosBottomRight = document.querySelectorAll(
    ".third-section-article-element-infos-bottom-right"
  );
  const thirdSectionArticleElementInfosBottomLeft = document.querySelectorAll(
    ".third-section-article-element-infos-bottom-left"
  );

  const fourthSectionArticleTopRightParagraph = document.querySelectorAll(
    ".fourth-section-article-top-right-paragraph"
  );
  const fourthSectionArticleBottomTopParagraph = document.querySelectorAll(
    ".fourth-section-article-bottom-top-paragraph"
  );
  const navItemHeader = document.querySelectorAll(".nav-item-header");
  const embeddedNavItemLinks = document.querySelectorAll(
    ".embedded-nav-item-link"
  );
  const copyRight = document.querySelector(".copyright");
  const langStorage = localStorage.getItem("language");
  nav.querySelectorAll(".nav-item").forEach((e) => {
    e.remove();
  });
  for (let i = languageObject[langStorage].navItems.length - 1; i >= 0; i--) {
    const navItemsInsert = `
          <li class="nav-item">
            <a href="#" class="nav-item-link">${languageObject[langStorage].navItems[i]}</a>
          </li>
      `;
    nav.insertAdjacentHTML("afterbegin", navItemsInsert);
  }
  document.documentElement.setAttribute(
    "dir",
    localStorage.getItem("language") === "ar" ? "rtl" : "ltr"
  );
  const languageInsert = `
      <div class="language">
          <i class="fa-solid fa-earth-europe icon"></i>
          ${languageObject[langStorage].language}
          <i class="fa-solid fa-angle-down icon"></i>
          <div class="language-options hide">
            <p class="arabic">عربي</p>
            <p class="english">English</p>
          </div>
      </div>
      `;
  dateAndLanguage.insertAdjacentHTML("beforeend", languageInsert);
  liveBtn.style.display =
    localStorage.getItem("language") === "ar" ? "block" : "none";

  alhadathContainer.style.display =
    localStorage.getItem("language") === "ar" ? "flex" : "none";

  logo.forEach((l) => {
    l.src = `logo-${localStorage.getItem("language")}-${
      themeObject[localStorage.getItem("theme")].logo
    }.png`;
  });

  for (let i = 0; i <= captionText.length - 1; i++) {
    captionText[i].textContent = languageObject[langStorage].captionText[i];
    captionText[i].style.textAlign =
      localStorage.getItem("language") === "en" ? "left" : "right";
  }

  for (let i = 0; i <= mainSectionAsideElementParagraph.length - 1; i++) {
    mainSectionAsideElementParagraph[i].childNodes[2].textContent =
      languageObject[langStorage].mainSectionAsideElementParagraph[i];
  }

  for (let i = 0; i <= mainSectionAsideElementSpan.length - 1; i++) {
    mainSectionAsideElementSpan[i].textContent =
      languageObject[langStorage].mainSectionAsideElementSpan[i];
  }

  for (let i = 0; i <= sectionSecondTitle.length - 1; i++) {
    const sectionSecondTitleInsert = `
        <h1 class="section-second-title">
        ${languageObject[langStorage].sectionSecondTitle[i]} <i class="fa-solid fa-angle-${languageObject[langStorage].arrow}"></i>
        </h1>
  `;
    sectionSecondTitle[i].innerHTML = sectionSecondTitleInsert;
  }
  for (let i = 0; i <= sectionSecondArticleElementParagraph.length - 1; i++) {
    sectionSecondArticleElementParagraph[i].childNodes[2].textContent =
      languageObject[langStorage].sectionSecondArticleElementParagraph[i];
  }
  for (let i = 0; i <= thirdSectionHeaderLeft.length - 1; i++) {
    thirdSectionHeaderLeft[i].textContent =
      languageObject[langStorage].thirdSectionHeaderLeft[i];
  }
  for (let i = 0; i <= thirdSectionHeaderRight.length - 1; i++) {
    thirdSectionHeaderRight[i].textContent =
      languageObject[langStorage].thirdSectionHeaderRight[i];
  }
  for (let i = 0; i <= thirdSectionArticleElementInfosTitle.length - 1; i++) {
    thirdSectionArticleElementInfosTitle[i].textContent =
      languageObject[langStorage].thirdSectionArticleElementInfosTitle[i];
  }
  for (
    let i = 0;
    i <= thirdSectionArticleElementInfosBottomRight.length - 1;
    i++
  ) {
    thirdSectionArticleElementInfosBottomRight[i].textContent =
      languageObject[langStorage].thirdSectionArticleElementInfosBottomRight[i];
  }
  for (
    let i = 0;
    i <= thirdSectionArticleElementInfosBottomLeft.length - 1;
    i++
  ) {
    thirdSectionArticleElementInfosBottomLeft[i].textContent =
      languageObject[langStorage].thirdSectionArticleElementInfosBottomLeft[i];
  }
  for (let i = 0; i <= fourthSectionArticleTopRightParagraph.length - 1; i++) {
    fourthSectionArticleTopRightParagraph[i].textContent =
      languageObject[langStorage].fourthSectionArticleTopRightParagraph[i];
  }
  for (let i = 0; i <= fourthSectionArticleBottomTopParagraph.length - 1; i++) {
    fourthSectionArticleBottomTopParagraph[i].textContent =
      languageObject[langStorage].fourthSectionArticleBottomTopParagraph[i];
  }
  for (let i = 0; i <= navItemHeader.length - 1; i++) {
    navItemHeader[i].textContent = languageObject[langStorage].navItemHeader[i];
  }
  for (let i = 0; i <= embeddedNavItemLinks.length - 1; i++) {
    embeddedNavItemLinks[i].textContent =
      languageObject[langStorage].embeddedNavItemLinks[i];
  }

  copyRight.textContent = ` \u00A9 ${languageObject[langStorage].copyRight}`;
  footer.querySelector(".up").remove();
  const upInsert = `
      <a href="#" class="up">
        <span class="up-span">${languageObject[langStorage].upSpan}</span>
        <i class="fa-solid fa-angle-up" style="font-size: 1.4rem"></i>
      </a>
  `;
  footer.insertAdjacentHTML("afterbegin", upInsert);
};
