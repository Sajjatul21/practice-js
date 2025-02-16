function add(a, b) {
    var result = a + b;
    console.log(result);
}
add(10, 20);

function sub(a, b) {
    var result = a - b;
    console.log(result);
}

sub(20, 5);

var arr1 = [23, 43, 64];
var arr2 = [65, 83, 94];
var arr3 = [5, 85, 90];

var sum = 0;
for (var i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log(sum);

function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)