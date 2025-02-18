function Square(width) {
    this.width = width;
    this.draw = function () {
        console.log("draw");
    };

}
Square.prototype = {
    draw: function () {
        console.log('Draw');
    },
    toString: function () {
        console.log("MY width is " + this.width);
    }
};
var sqr1 = new Square(5);
var sqr2 = new Square(10);

console.log(sqr1);
console.log(sqr2);