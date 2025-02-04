function Shape() {

}
Shape.prototype = {
    common: function () {
        console.log('I am common function');
    }
};

function Square(width) {
    this.width = width;
};

Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function () {
    console.log("Draw");
};

var sqr = new Square(57);
console.log(sqr.common());

// console.log(sqr);

function Circle() {

}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.common = function () {
    console.log('I am common function');

};

var c = new Circle();
console.log(c.common());

