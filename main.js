var person = {
    name: "Shihab"
};

console.log(person);
console.log(person.toString());

for (var i in person) {
    console.log(i);
}

console.log(Object.keys(person));
var descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);

var baseObj = Object.getPrototypeOf(person);
console.log(baseObj);
var descriptor1 = Object.getOwnPropertyDescriptor(baseObj, "toString");
console.log(descriptor1);

Object.defineProperty(person, 'name', {
    configurable: false,
    enumerable: false,
    writable: false
});
console.log(delete person.name);

console.log(Object.keys(person));

person.name = "Sajjatul Islam ";
console.log(person);