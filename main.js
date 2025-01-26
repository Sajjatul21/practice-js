

var createReact = function (width, height) {
    return {
        width: width,
        height: height,
        draw: function () {
            console.log('I am a rectangle');
            this.printProperties();
            console.log(this);
        },
        printProperties: function () {
            console.log("My width is " + this.width);
            console.log("My height is " + this.height);
        }
    };
};

var rect = createReact(20, 40);
rect.draw();
var rect2 = createReact(80, 60);
rect2.draw();