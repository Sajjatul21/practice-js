var arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.join(' '));
console.log(arr.join(', '));
console.log(arr.join('| '));
console.log(arr.fill(0));
console.log(arr.fill(true));

var arr1 = [3, 4, 5, 6];
var arr2 = [7, 8, 9, 10];
var arr3 = arr1.concat(arr2);
console.log(arr3)
console.log(Array.isArray(arr))

var a = [1,2]
var b = Array.from(a)
b[0]=100
console.log(a)
console.log(b)
