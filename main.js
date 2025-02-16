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

function test() {
    // console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);
        sum += arguments[i];
    }
    console.log(sum);
}
test(1, 2, 3, 4, 6, 7, 8, 9, 10);