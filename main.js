function add(a, b) {
    return a + b;
}


function manipulated(a, b, func) {
    var c = a + b;
    var d = a - b;

    /* function multiply() {
        var m = func(a, b);
        return c * d * m;
    }
    return multiply; */
    return function () {
        var m = func(a, b);
        return c * d * m;
    };
}

var multiply = manipulated(4, 3, add);
console.log(typeof multiplyj);
console.log(multiply());