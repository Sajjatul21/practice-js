function Shape(color) {
    this.color = color;
}
Shape.prototype = {
    common: function () {
        console.log("I am common function");
    }
};


function Square(width, color) {
    Shape.call(this, color);
    this.width = width;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function () {
    console.log("Drawing");
};

var sqr = new Square(56, "Green");


function Circle() {

}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
var c = new Circle();
