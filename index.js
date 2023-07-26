const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes.js");
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
async function generateLogo() {
  const { shape, text, text_color, shape_color } = await inquirer.prompt(
    questions
  );

  let logo;
  switch (shape) {
    case "Circle":
      logo = new Circle(text, text_color, shape_color);
      break;
    case "Square":
      logo = new Square(text, text_color, shape_color);
      break;
    case "Triangle":
      logo = new Triangle(text, text_color, shape_color);
      break;
  }
  writeFile("./genLogo/logo.svg", logo.genLogo());
}
generateLogo();
// inquirer.prompt(questions).then(({ shape, text, text_color, shape_color }) => {
//   let logo;
//   switch (shape) {
//     case "Circle":
//       logo = new Circle(text, text_color, shape_color);
//       break;
//     case "Square":
//       logo = new Square(text, text_color, shape_color);
//       break;
//     case "Triangle":
//       logo = new Triangle(text, text_color, shape_color);
//       break;
//   }

//function creates the logo.svg file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("logo.svg made!")
  );
}

// function genLogo(text, text_color, shape, shape_color) {}
