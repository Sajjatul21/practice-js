function Square(width) {
    this.width = width;
    this.getWidth = function () {
        console.log("Width is " + this.width);
        this.draw();// using prototype member
    };
}

Square.prototype = {
    draw: function () {
        console.log("Draw");

    },
    // method overwrite
    toString: function () {
        this.getWidth();
        return 'my width is ' + this.width;

    }
};
var sqr = new Square(5);
sqr.draw();
console.log(sqr.toString());