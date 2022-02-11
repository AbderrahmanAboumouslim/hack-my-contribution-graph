const columns = Array.from(
  document.querySelectorAll(".js-calendar-graph > svg > g > g")
).map((group) => Array.from(group.querySelectorAll("rect")));

const emptyColor = "#161b22";
const fillColor = "#39d353";

// columns[1][0].style.fill = fillColor;
columns.forEach((c) => c.forEach((f) => (f.style.fill = fillColor)));
