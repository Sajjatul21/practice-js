var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;

    this.draw = function () {
        console.log("I am rectangle");
        this.printProperties();
        console.log(this);
    };
    this.printProperties = function () {
        console.log("My width is", this.width);
        console.log("My height is", this.height);
    };
};

var rect = new Rectangle(2,3);
rect.draw();