function Shape() {

}
Shape.prototype = {
    common: function () {
        console.log("I am common function");
    }
};


function Square(width) {
    this.width = width;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function () {
    console.log("Drawing");
};

var sqr = new Square(56);


function Circle() {

}
Circle.prototype = Object.create(Shape.prototype);
var c = new Circle();
