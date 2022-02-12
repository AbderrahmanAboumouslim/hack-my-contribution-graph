import Color from "color";

const columns = Array.from(
  document.querySelectorAll(".js-calendar-graph > svg > g > g")
).map((group) => Array.from(group.querySelectorAll("rect")));

const emptyColor = "#161b22";
const fillColor = "#39d353";

columns.forEach((c) => c.forEach((rect) => (rect.style.fill = fillColor)));

console.log("test");
console.log(Color(fillColor));
