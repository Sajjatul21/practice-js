class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.another = function(){
            
        }
    }
    name = "Shihab";
    test = function () {

    };
    draw() {
        console.log("Drawing");
    }
}
let rect1 = new Rectangle(45, 65);
console.log(rect1);
console.log(rect1.draw());
console.log(typeof Rectangle);
console.log(typeof rect1.name);