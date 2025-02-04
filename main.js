function Square(width) {
    this.width = width;
}
Square.prototype = {
    draw: function () {
        console.log("Draw");
    },
    // method overwrite
    toString: function () {
        return 'my width is ' + this.width;
    }
};
var sqr = new Square(5)
sqr.draw()
console.log(sqr.toString())