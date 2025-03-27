function add(a, b) {
    var result = a + b;
    console.log(result);
}
add(10, 20);



var arr = [23, 43, 64];

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

var arr2 = [65, 83, 94, 89];
var arr3 = [5, 85, 90, 100, 200];
sumOfArray(arr2);
sumOfArray(arr3);