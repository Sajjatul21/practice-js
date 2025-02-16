var obj = {
    x: 10,
    y: 20
};
// dot notation

console.log(obj.x);
// array notation
console.log(obj["y"]);


var person = {
    name: "Johan",
    age: 32
};
// console.log(person["name"])
var props = "name";
console.log(person[props]);

var person1 = {
    "first Name": "jack johan",
    age: 21
};
console.log(person1['first Name']);