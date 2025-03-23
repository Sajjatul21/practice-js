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