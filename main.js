var obj1 = {
    a: 10,
    b: 20
};
var obj2 = {
    a: 10,
    b: 20
};

console.log(obj1 === obj2);

if (obj1.a === obj2 && obj1.b === obj2.b) {
    console.log(true);
}
else {
    console.log(false);
}
