// var arr = [1, 2, 52, 70, 2, 74, 83, 26];
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.join(' '));
console.log(arr.join(', '));
console.log(arr.join('| '));

arr.fill(0);
console.log(arr);
arr.fill(true);
console.log(arr);

var arr1 = [3, 4, 5, 6];
var arr2 = [7, 8, 9, 10];
var arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(Array.isArray(arr3));

var a = [1, 3];
/* var b = a
b[0] = 4 */
var b = Array.from(a);
b[0]= 5;
console.log(a);
console.log(b)

console.log(Array.from("123"))