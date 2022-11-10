export const changeDate = () => {
  const date = document.querySelector(".date");
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const dayOfWeek = new Date().getDay(); // day of week
  const dayOfMonth = new Date().getDate(); // day of month

  const e = new Date(Date.UTC(year, month, dayOfMonth, dayOfWeek, 0, 0));
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const trDate = e.toLocaleDateString(
    localStorage.getItem("language"),
    options
  );
  date.textContent = trDate;
};
