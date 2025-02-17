var arr = [2, 5, 2, 7, 8, 5, 4, 9, 5, 8, 4];

var filterArr = arr.filter(function (value) {
    return value > 4;
});

// console.log(filterArr);

function filter(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var odd = filter(arr, function (value, index, arr) {
    return value % 2 == 0;
});
console.log(odd);