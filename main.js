function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Shape(color) {
    this.color = color;
}
Shape.prototype.common = function () {
    console.log('I am common function');
};


function Square(width, color) {
    Shape.call(this, color);
    this.width = width;
};

extend(Square, Shape);
Square.prototype.draw = function () {
    console.log("Draw");
};

var shape = new Shape();
var sqr = new Square(57, "green");

console.log(shape);
console.log(sqr);

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
extend(Circle, Shape);
Circle.prototype.common = function () {
    console.log('I am common function');

};

var c = new Circle(5, 'red');

console.log(c)

