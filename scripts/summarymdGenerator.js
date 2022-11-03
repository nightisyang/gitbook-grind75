const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "grind75-links.json");
const file = fs.readFileSync(filePath);
const jsonArr = JSON.parse(file);

const week = [
  "week-1",
  "week-2",
  "week-3",
  "week-4",
  "week-5",
  "week-6",
  "week-7",
  "week-8",
];
const interval = [13, 12, 8, 8, 8, 9, 7, 10];
let count = 0;
let index = 0;
let weekNum = week[0];
console.log(`- [${weekNum}](README.md)`);
jsonArr.forEach((obj) => {
  const [element] = Object.entries(obj);
  const [key, value] = element;
  const filename = key.toLowerCase().replaceAll(" ", "-");

  count++;

  if (count === interval[index] + 1) {
    index++;
    weekNum = week[index];
    console.log(`- [${weekNum}](README.md)`);
    count = 1;
  }

  console.log(`  - [${key}](${weekNum}/${filename}.md)`);
});
// console.log(count);
