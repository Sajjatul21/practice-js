/* function myFunc(c, d) {
    console.log(this.a + this.b + c + d);
    console.log(this);
} */
// myFunc.call({ a: 10, b: 20 });
/* 
function myFunc(c, d) {
    console.log(this.a + this.b + c + d);
    console.log(this);
}
myFunc.apply({ a: 10, b: 20 }, [40, 50]); */
function myFunc(c, d) {
    console.log(this.a + this.b + c + d);
    console.log(this);
}/* 
var result = myFunc.bind({ a: 10, b: 20 }, 10, 20);
console.log(result()) */;
var testBind = myFunc.bind({ a: 20, b: 30 });
testBind(50, 60);

var person = {
    name: "Sajjatul"
};

function greet() {
    console.log("Hello",  this.name);

}
var boundGreet = greet.bind(person);
boundGreet();


var person1 = {
    name: "Shihab"
}
function greeting(greeting){
    console.log(greeting, ", "+ this.name)
}
greet.call(person1)

var person2 = {
    name: "Sajjatu Islam"
}

function greet2 (greeting, ending){
    console.log(greeting, ", "+ this.name + ending)
}

greet.apply(person2, ["Hello", "!"])