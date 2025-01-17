var arr = [2, 5, 2, 7, 8, 5, 4, 9, 5, 8, 4];
var sum = arr.reduce(function (previousValue, CurrentValue) {
    // console.log(previousValue, CurrentValue)
    // return previousValue + CurrentValue
    return Math.max(previousValue, CurrentValue);
});
console.log(sum);

function reduce(arr, cb, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i]);
    }
    return acc;
}
var sum1 = reduce(arr, function (pre, curr) {
    return Math.min(pre,curr)
}, arr[0]);
console.log(sum1)
