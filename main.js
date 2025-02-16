// var arr = [1, 2, 52, 70, 2, 74, 83, 26];
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;

}
console.log(arr);

console.log(arr.reverse());