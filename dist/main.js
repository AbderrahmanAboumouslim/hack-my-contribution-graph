Array.from(document.querySelectorAll(".js-calendar-graph > svg > g > g")).map((r=>Array.from(r.querySelectorAll("rect")))).forEach((r=>r.forEach((r=>r.style.fill="#39d353")))),console.log("test");