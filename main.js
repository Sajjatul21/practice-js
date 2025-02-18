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