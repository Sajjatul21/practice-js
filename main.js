var obj = {
    x: 10,
    y: 20,
    z: 30
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


var obj1 = {
    x: 10,
    y: 20,
    z: 30
};
var obj2 = Object.assign({}, obj1);
obj2.x = 200;
console.log(obj1);
console.log(obj2);