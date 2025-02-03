var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;

    var printProperties = function () {
        console.log("My width is", this.width);
        console.log("My height is", this.height);
    };
    this.draw = function () {
        console.log("I am rectangle");
        printProperties();
    };
};
var rect = new Rectangle(20, 10);
rect.draw();
// rect.printProperties();
