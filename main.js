var b = 10;
function a() {
    console.log(b);
}

a();


function outer() {
    let outerVariable = "I am from outer function";

    function inner() {
        console.log(outerVariable);
    }
    return inner;
}

const closureExample = outer();

closureExample();

function closure() {
    var x = 5;
    return function () {
        console.log(x);
    };
}

var abc = closure();
// console.dir(abc);
abc()
