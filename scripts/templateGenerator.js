const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "grind75-links.json");
const file = fs.readFileSync(filePath);
const jsonArr = JSON.parse(file);

const boilerPlate = fs.readFileSync(
  path.join(__dirname, "templateBoilerplate.md")
);

jsonArr.forEach((obj) => {
  const [element] = Object.entries(obj);
  //   console.log(element[0], element[1]);

  const template =
    `# ${element[0]}\n\n{% embed url="${element[1]}" %}\n\n` + boilerPlate;

  const filename = element[0].toLowerCase().replaceAll(" ", "-");

  //   console.log(template);
  fs.writeFileSync(
    path.join(__dirname, "output", `${filename}.md`),
    template,
    "utf-8"
  );
  console.log(`${filename}.md successfully written to disk!`);
});
