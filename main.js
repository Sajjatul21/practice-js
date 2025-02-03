
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
var area2 = rect.calculateRange();

console.log(area1);
console.log(area2);

class ClassName {
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }
    method1() {
        console.log(`property: ${this.property1}`);
    }
    method2() {
        console.log(`property2: ${this.property2}`);
    }
    static staticMethod() {
        console.log("This is a static method.");
    }
}

const obj = new ClassName("Value1", "Value2");
console.log(obj);

class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculateRange() {
        return 2 * (this.width + this.height);
    }
}

var rect1 = new Rect(10, 20);
var rect2 = new Rect(30, 40);
console.log(rect1);
console.log(rect2);