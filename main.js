var str = '1000';
var n = 10;

console.log(str * n);

console.log(str + n);

console.log(Number(str));
console.log(Number(str) + n);
console.log(parseInt(str));
console.log(parseFloat(str));

console.log(n.toString());

console.log(String(Infinity));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));

// falsy value 
console.log(Boolean(''))
console.log(Boolean('jfdk'))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

// boolean to string

console.log(true)

var x = true
console.log(x.toString())