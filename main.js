
var arr = [5, 4, 3, 8, 1, 7, 0, 6, 5, 7, -2, -8];

var res = arr.every(function(value){
    return value % 2 ==0
})
console.log(res)

var res2 = arr.some(function(value){
    return value >=0
})

console.log(res2)