var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;

    // var name = 'Sajjatul';
    var position = {
        x: 50,
        y: -100
    };
    var printProperties = function () {
        console.log("My width is", this.width);
        console.log("My height is", this.height);
    }.bind(this);

    Object.defineProperty(this, 'position', {
        get: function () {
            return position;
        },
        set: function (value) {
            position = value;
        }

    });
    this.draw = function () {
        console.log("I am rectangle");
        printProperties();
        console.log("Position:x =", position.x, ",", "Position:y =", position.y);
    };
};
var rect = new Rectangle(20, 10);
console.log(rect.position);
rect.position = {
    x: 55,
    y: 66
};
console.log(rect.position);