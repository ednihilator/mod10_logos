const inquirer = require("inquirer");
const shapes = require("./lib/shapes.js");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Text up to 3 characters",
    name: "text",
  },
  {
    type: "input",
    message: "text color",
    name: "text_color",
  },
  {
    type: "list",
    message: "shape",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    message: "Shape's color",
    name: "shape_color",
  },
];

inquirer.prompt(questions).then((response) => {
  const logoGen = genLogo(response);
  writeToFile("./genLogo/logo.svg", logoGen);
});

//function creates the logo.svg file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("logo.svg made!")
  );
}

function genLogo(text, text_color, shape, shape_color) {}
