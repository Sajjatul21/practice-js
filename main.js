var arr = [1, 4, 3, 9, 8, 5, 7];
// arr[2] = 55
// arr.push(9)
// arr.unshift(20);
arr.splice(2, 0, 1000);

// arr[2] = undefined
/* arr.pop()
arr.shift() */
// arr.splice(2,1)
arr.splice(2,1, 2000, 3000)
console.log(arr);