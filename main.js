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
Square.prototype.common = function () {
    console.log('I am calling from Square and I have Overriding');

};

var shape = new Shape();
var sqr = new Square(57, "green");


console.log(shape.common());
console.log(sqr.common());

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
extend(Circle, Shape);

var c = new Circle(5, 'red');

Circle.prototype.common = function () {
    Shape.prototype.common.call(this);
    console.log('I am calling from Circle and I have Overriding');

};
console.log(c.common())

