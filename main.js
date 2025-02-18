var width = 10;
var height = 20;

function calculateArea(width, height) {
    return width * height;
}

function calculateRange(width, height) {
    return 2 * (width + height);
}

var area = calculateArea(width, height);
var range = calculateRange(width, height);

var rect = {
    width: 10,
    height: 20,
    calculateArea: function () {
        return this.width * this.height;
    },
    calculateRange: function () {
        return 2 * (this.width + this.height);
    }
};

var area1 = rect.calculateArea();
var range1 = rect.calculateRange();

class ClassName {
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }
    method1() {
        console.log(`property1: ${this.property1}`);
    }
    method2() {
        console.log(`Property2: ${this.property2}`);
    }

    static staticMethod() {
        console.log('This is a static method');
    }
}

const obj = new ClassName("Value1", "Value2");
obj.method1();
obj.method2();
ClassName.staticMethod();