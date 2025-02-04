
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        console.log(this);
        console.log("Drawing");
    }
}

let rect = new Rectangle(23, 43);
rect.draw();
console.log(typeof Rectangle);