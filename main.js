function myFunc(c, d) {
    console.log(this.a + this.b + c + d);
}
var obj = {
    a: 10,
    b: 20
};
myFunc.apply(obj, [100, 200]);