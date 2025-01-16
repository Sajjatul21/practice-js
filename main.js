var arr = [1, 4, 3, 9, 8, 5, 7,8];

// arr[2] = 44
/* arr.push(9)
arr.unshift(10) */

arr.splice(2,0,100)

// arr.pop()
// arr.shift()
// arr.splice(1,2)

arr.splice(3,1,33,55)
console.log(arr)