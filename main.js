var arr = [1, 2, 3, 4, 5];

var sqrArr = arr.map(function (value, index, arr) {
    // console.log(value, index, arr);
    // return Math.random()*100
    return value * value
});
console.log(sqrArr)