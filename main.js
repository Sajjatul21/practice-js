var arr = [1, 4, 3, 9, 8, 5, 7];
arr[2] = 3;
console.log(arr);

arr.push(9);
console.log(arr);
arr.unshift(20);
console.log(arr);

/*  array.split(startIndex, delete count, addItem1, addItem2) */

arr.splice(2, 0, 1000);
console.log(arr);