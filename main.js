var arr = [2, 5, 2, 7, 8, 5, 4, 9, 5, 8, 4];

var result = arr.findIndex(function (value) {
    // return value ===9
    return value === -9;
});

console.log(result);

function findIndex(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i;
        }
    }
}
var findElement = findIndex(arr, function(value) {
    return value == 9;
});

console.log(findElement)