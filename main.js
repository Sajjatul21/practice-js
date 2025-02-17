var arr = [2, 4, 3, 7, 5, 8, 9, 6];

var result = arr.findIndex(function (value) {
    return value % 2 == 0;
});
console.log(result);

function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
}

var findIndexValue = findIndex(arr, function (value) {
    return value == 9;
});

console.log(findIndexValue);