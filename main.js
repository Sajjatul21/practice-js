var rect = {
    width: 100,
    height: 50,
    draw: function () {
        console.log("I am rectangle");
        this.printProperties();
        console.log(this);
    },
    printProperties: function () {
        console.log('MY width is ' + this.width);
        console.log("MY height is " + this.height);
    }
};
rect.draw();

var another = {
    width: 45,
    height: 30,
    print: rect.printProperties
};
another.print();