function Square(width) {
    this.width = width;
    this.getWidth = function () {
        console.log("Width is " + this.width);
        // this.draw();
    };

}
Square.prototype = {
    draw: function () {
        console.log('Draw');
        this.getWidth();
    },
    toString: function () {
        console.log("MY width is " + this.width);
    }
};
var sqr1 = new Square(5);
var sqr2 = new Square(10);

console.log(sqr1);
console.log(sqr2);

console.log(sqr1.hasOwnProperty("width"))
console.log(sqr1.hasOwnProperty("draw"))

console.log(Object.keys(sqr1))

for(var i in sqr1){
    console.log(i)
}