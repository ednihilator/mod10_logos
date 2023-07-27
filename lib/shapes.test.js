const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
  it("valid", () => {
    const shape = new Circle("HII", "blue", "red");
    const expectedResult = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="red" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">HII</text>
</svg>`;
    // const expectedResult = `<circle cx="150" cy="100" r="80" fill="red" />`;
    expect(shape.genLogo()).toEqual(expectedResult);
  });
});

describe("Triangle", () => {
  it("valid", () => {
    const shape = new Triangle("LOL", "green", "black");
    const expectedResult = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="100, 15 200, 200 0, 200" fill="black" />
<text x="100" y="150" font-size="40" text-anchor="middle" fill="green">LOL</text>
</svg>`;
    // const expectedResult = `<polygon points="100, 15 200, 200 0, 200" fill="black" />`;
    expect(shape.genLogo()).toEqual(expectedResult);
  });
});

describe("Square", () => {
  it("valid", () => {
    const shape = new Square("SVG", "orange", "purple");
    const expectedResult = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect width="66.6%" height="100%" fill="purple" />
<text x="100" y="120" font-size="60" text-anchor="middle" fill="orange">SVG</text>
</svg>`;
    // const expectedResult = `<rect width="100%" height="100%" fill="purple" />`;
    expect(shape.genLogo()).toEqual(expectedResult);
  });
});
