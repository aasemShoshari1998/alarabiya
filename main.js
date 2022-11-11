import { changeDate } from "./modules/changeDate.js";
import { changeTheme } from "./modules/changeTheme.js";
import { changeLanguage } from "./modules/changeLanguage.js";

if (!localStorage.getItem("language")) localStorage.setItem("language", "ar");
if (!localStorage.getItem("theme")) localStorage.setItem("theme", "dark");

changeDate();
changeTheme();
changeLanguage();
