function myFunc(c, d) {
    console.log(this.a + this.b + c + d);
}
var obj = {
    a: 10,
    b: 20
};
// var testBind = myFunc.bind(obj, 10,20)
// testBind()

var testBind = myFunc.bind(obj)
testBind(10,20)