class ClassName {
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }
    method1() {
        console.log(`property1: ${this.property1}`);
    }
    method2() {
        console.log(`property2: ${this.property2}`);

    }
    static staticMethod() {
        console.log('this is a static method');
    }
}
const obj = new ClassName("value1", "Value2");
obj.method1();
obj.method2();

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
var rect2 = new Rect(20, 40);
console.log(rect1.calculateArea())
console.log(rect2.calculateArea())