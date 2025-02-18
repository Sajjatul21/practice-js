function test() {
    var msg = 'I am learning lexical scope and closure';
    function sayMsg() {
        console.log(msg);
    }
    sayMsg();
}

function test1() {
    var msg = 'I am learning lexical scope and closure';

    return function () {
        console.log(msg);
    };
}

var sayMsg = test1();
console.log(sayMsg);
sayMsg();