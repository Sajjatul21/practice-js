var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
    // var name = "Sajjatul Islam";
    var position = {
        x: 50,
        y: 20
    };

    var printProperties = function () {
        console.log("my width is " + this.width);
        console.log('My height is ' + this.height);
    }.bind(this);
    this.draw = function () {
        console.log("I am rectangle");
        printProperties();
        console.log('Position:X = ' + position.x + ", position:Y = " + position.y);
    };
};

var rect = new Rectangle(4, 5);
// rect.printProperties()error
rect.draw();
