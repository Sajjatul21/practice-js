function myFunc() {
    console.log(this);
}
myFunc();
new myFunc();


var rect = {
    width: 100,
    height: 200,
    draw: function () {
        console.log("I am a rectangle");
        this.printProperties();
        console.log(this);
    },

    printProperties: function () {
        console.log("My width is", this.width);
        console.log("My height is", this.height);
    }
};

rect.draw();

var another = {
    width: 59,
    height: 63,
    print: rect.printProperties
};

another.print();