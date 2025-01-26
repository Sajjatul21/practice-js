function myfunc(c, d) {
    console.log(this.a + this.b + c + d);
}
// myfunc.apply({ a: 10, b: 20 }, [3, 5]);
var test =myfunc.bind({a:4,b:3})
test(10,20)