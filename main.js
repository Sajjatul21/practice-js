
var createReact = function (width, height) {
    return {
        width: width,
        height: height,
        draw: function () {
            console.log("I am a rectangle");
            this.printProperties();
            console.log(this);
        },
        printProperties: function () {
            console.log("MY width is ", this.width);
            console.log("My height is " + this.height);
        }
    };
};

var rect = createReact(10, 5);
console.log(rect);
rect.draw();