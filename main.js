class Shape {
    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log("Drawing");
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    draw() {
        console.log("Drawing a Rectangle....");
    }
    calculate() {
        return this.width * this.height;
    }
}

let r = new Rectangle("Red", 3, 4);
console.log(r);
r.draw();
console.log(r.color);