var age = 26;
var name = 'Sajjatul Islam';

console.log(`My name is ${name} and I am ${age} old. I am ${age < 18 ? "not " : ""}adult`);

console.log(name.padStart(25));
console.log(name.padEnd(25));
console.log(name.padStart(25, "*"));
console.log(name.padEnd(25, "f"));
console.log("S".repeat(10));