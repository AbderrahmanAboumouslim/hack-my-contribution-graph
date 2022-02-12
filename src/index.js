// npx webpack --watch ./src --mode development
import Color from "color";
import interpolateRGB from "interpolate-rgb";

const columns = Array.from(
  document.querySelectorAll(".js-calendar-graph > svg > g > g")
).map((group) => Array.from(group.querySelectorAll("rect")));

const emptyColor = "#161b22";
const fillColor = "#39d353";

const interpolator = interpolateRGB(
  Color(emptyColor).color,
  Color(fillColor).color
);

// x squares are 53  and y squares are 7
// to get a nice gradient we add x + y then divide it by 60
columns.forEach((c, x) =>
  c.forEach(
    (rect, y) => (rect.style.fill = Color(interpolator((x + y) / 60)).hex())
  )
);
