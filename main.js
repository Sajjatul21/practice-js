var person = {
    name: "Shihab"
};

console.log(person);
console.log(person.toString());

for (var i in person) {
    console.log(i);
}

console.log(Object.keys(person));

var descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);

var baseObj = Object.getPrototypeOf(person);
// console.log(baseObj)

var stringDescriptor = Object.getOwnPropertyDescriptor(baseObj, "toString");
console.log(stringDescriptor);

Object.defineProperty(person, 'name', {
    configurable: false,
    enumerable: false,
    writable: false
});