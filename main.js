function sample(a, b, callback) {
    var c = a + b;

    var d = a - b;

    /* var sum = c + d;
    console.log(sum); */

    var result = callback(c, d);
    return result;
}

console.log(sample(8, 2, sum));

function sum(a, b) {
    return a + b;
}

console.log(sample(8, 3, function (a, b) {
    return a - b;
}));


console.log(sample(8, 5, function (a, b) {
    return a * b;
}));