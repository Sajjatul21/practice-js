function myFunc() {
    console.log(this.a + this.b);
}
var obj = {
    a: 10,
    b: 20
};
myFunc.call(obj);
