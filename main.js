var a = "I am";
var b = "Sajjatul Islam";
var c = a.concat(" " + b);
console.log(c);

// var d = c.substr(5);
// var d = c.substr(5,2)
var d = c.substr(5, 4);

console.log(d);

console.log(c.charAt(7));
console.log(c.startsWith("s"));
console.log(c.endsWith("am"));
console.log(a.toUpperCase());
console.log(b.toLocaleLowerCase());

console.log('            sajjatul islam    '.trim());

console.log(c.split(' '));
