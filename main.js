var arr = [2, 5, 2, 7, 8, 5, 4, 9, 5, 8, 4];
var sum = arr.reduce(function (previousValue, CurrentValue) {
    // console.log(previousValue, CurrentValue)
    // return previousValue + CurrentValue
    return Math.max(previousValue, CurrentValue);
});
console.log(sum);