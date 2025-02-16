function sample(a, b, callback) {
    var c = a + b;
    var d = a - b;

    var result = callback(c, d);
    return result;
}

function sum(a, b) {
    return a + b;
}

var result = sample(5, 3, sum);
console.log(result);

var result2 = sample(5, 3, function (c, d) {
    return c - d;
});
console.log(result2);

var result3 = sample(8, 5, function (a, b) {
    return a * b;
});
console.log(result3);

var result4 = sample(6, 5, function (a, b) {
    return a / b;
});
console.log(result4);

function display(some) {
    console.log(some);
}

function calculate(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}
let total = calculate(5, 5, display);
