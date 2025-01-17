function greet(msg) {
    function greeting(name) {
        return msg + ' ' + name;
    }
    return greeting;
}

var gm = greet('Good morning');
var msg = gm("Sajjjatul Islam");
console.log(msg);

function base(b) {
    return function (n) {
        var result = 1;
        for (var i = 0; i < b; i++) {
            result *= n;
        }
        return result;
    };
}

var base10 = base(10);
console.log(base10(2));