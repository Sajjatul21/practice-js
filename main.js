var b = 10;
function a() {
    console.log(b);
}
a();

function outer() {
    var outerVariable = "I am from outer function";

    function inner() {
        return outerVariable;
    }
    return inner;
}
var closureExample = outer();
console.log(closureExample());

function closure() {
    var x = 5;
    return function () {
        console.log(x);
    };
}

var abc = closure();
console.dir(abc);

function outerFunction() {
    var outerVariable = 'Accessing outer function';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}

var myClosure = outerFunction();
myClosure();