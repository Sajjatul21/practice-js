function extend(Parent, Children) {
    Children.prototype = Object.create(Parent.prototype);
    Children.prototype.constructor = Children;
}

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
extend(Shape, Square);
Square.prototype.draw = function () {
    console.log("Drawing");
};

var sqr = new Square(56, "Green");


function Circle(color, radius) {
    Shape.call(this, color);
    this.radius = radius;
}
extend(Shape, Circle);
Circle.prototype.common = function () {
    console.log("I am calling from Circle. and I have overridden");
    Shape.prototype.common.call(this);
};
var c = new Circle('Red', 5);
