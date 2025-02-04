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
var sqr2 = new Square(10);

console.log(sqr.hasOwnProperty("width"));
console.log(sqr.hasOwnProperty("getWidth"));
console.log(sqr.hasOwnProperty("draw"));
console.log(sqr.hasOwnProperty("toString"));

for (var i in sqr) {
    // console.log(sqr[i]);
    console.log(i);
}