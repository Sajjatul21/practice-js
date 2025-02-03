var n = 10;
function change(n) {
    n += 20;
    console.log(n);
}
change(n);
console.log(n);

var obj = {
    a: 10,
    b: 20
};
console.log(obj);
function ChangeMe(obj) {
    obj.a = obj.a + 100;
    obj.b = obj.b + 100;
    console.log("Function in: ", obj);
}
ChangeMe(obj);
console.log("Function out: ", obj);