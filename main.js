var arr = [1, 2, 3, 4, 5];
var sqr = arr.map(function (value, index, arr) {
    // return Math.random ()* 100;
    return value * value;
});

console.log(arr);
console.log(sqr);

function map(arr, callback) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        // var temp = arr[i] * arr[i];
        var temp = callback(arr[i], i, arr);
        newArray.push(temp);
    }
    return newArray;
}
var myMap = map(arr, function (value, index, arr) {
    return value * value;
});
console.log(myMap);

var qubArr = map(arr, function (value) {
    return value * value * value;
});

console.log(qubArr);