var arr = [2, 4, 3, 7, 5, 8, 9, 6];
var sum = arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
// console.log(sum);

var max = arr.reduce(function (previousValue, currentValue) {
    return Math.max(previousValue, currentValue);
}, 0);
// console.log(max);

function reduce(arr, callback, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i]);
    }
    return acc;
}

var sum1 = reduce(arr, function (previousValue, currentValue) {
    return previousValue + currentValue;
}, 0);

var max1 = reduce(arr, function (previousValue, currentValue) {
    return Math.max(previousValue, currentValue);
}, arr[0]);

console.log(max1);