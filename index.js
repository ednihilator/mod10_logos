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

// class SVG {
//   constructor(text, text_color, shape, shape_color) {
//     this.text = text;
//     this.shape = shape;
//     this.shape_color = shape_color;
//     this.text_color = text_color;
//     this.shapeInfo = "";
//     this.textInfo = "";
//   }

//   genLogo() {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
//   }

// insertTextInfo(text, text_color) {
//   this.textInfo = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>`;
// }
// insertShapeInfo(shape) {
//   this.shapeInfo = shape.genLogo();
// }
// genLogo() {
//     return `<svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="${this.shape_color}" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>

// </svg>`;
//   }
// }
// }

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

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("logo.svg made!")
  );
}
