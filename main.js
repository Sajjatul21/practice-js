var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;

    var printProperties = function () {
        console.log("my width is " + this.width);
        console.log('My height is ' + this.height);
    };
    this.draw = function () {
        console.log("I am rectangle");
        printProperties.call(this);
    };
};

var rect = new Rectangle(4, 5);
// rect.printProperties()error
rect.draw();