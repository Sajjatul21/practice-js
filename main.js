var createReact = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log("I am rectangle");
            this.printProperties();
            console.log(this);
        }
        ,
        printProperties: function () {
            console.log("My width is", width);
            console.log('My height is', height);
        }
    };
};

var react = createReact(10, 5);
// console.log(react);
react.draw()

var react2 = createReact(100, 200)
console.log(react2)
react2.draw()