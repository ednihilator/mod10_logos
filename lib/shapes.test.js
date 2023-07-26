const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
  it("valid", () => {
    const shape = new Circle("dks", "blue", "red");
    expect(shape.genLogo())
      .toEqual(`<circle cx="150" cy="100" r="80" fill="red" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">dks</text>`);
  });
});

describe("Triangle", () => {
  it("valid", () => {
    const shape = new Triangle("ggg", "green", "black");
    const color = blue;
    shape.setColor(color);
    expect(shape.genLogo())
      .toEqual(`<polygon points="100, 15 200, 200 0, 200" fill="${this.shape_color}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>`);
  });
});

describe("Square", () => {
  it("valid", () => {
    const shape = new Square("hhh", "yellow", "orange");
    const color = blue;
    shape.setColor(color);
    expect(shape.genLogo())
      .toEqual(`<rect width="100%" height="100%" fill="${this.shape_color}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>`);
  });
});
