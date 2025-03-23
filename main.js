var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.join(' '));
console.log(arr.join(', '));
console.log(arr.join('| '));

arr.fill(0);

console.log(arr);

arr.fill(true);
console.log(arr);