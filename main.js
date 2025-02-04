function Shape() {

}
Shape.prototype.common = function () {
    console.log('I am common function');
};


function Square(width) {
    this.width = width;
};

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function () {
    console.log("Draw");
};

var shape = new Shape();
var sqr = new Square(57);
// console.log(sqr.common());
console.log(shape);
console.log(sqr);

function Circle() {

}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.common = function () {
    console.log('I am common function');

};

var c = new Circle();
// console.log(c.common());
console.log(c)

