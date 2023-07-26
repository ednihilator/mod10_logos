class Shape {
  constructor(text, text_color, shape_color) {
    this.text = text;
    this.text_color = text_color;
    this.shape_color = shape_color;
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(text, text_color, shape_color) {
    super(text, text_color, shape_color);
  }

  genLogo() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shape_color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>

</svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, text_color, shape_color) {
    super(text, text_color, shape_color);
  }
  genLogo() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <polygon points="100, 15 200, 200 0, 200" fill="${this.shape_color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>

</svg>`;
  }
}

class Square extends Shape {
  constructor(text, text_color, shape_color) {
    super(text, text_color, shape_color);
  }
  genLogo() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="${this.shape_color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>

</svg>`;
  }
}

module.exports = { Triangle, Square, Circle };
