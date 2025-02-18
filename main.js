var x = 55;
function test() {
    var x = 45;
    console.log(x)

    function nested() {
        var y = 55;
        console.log(x);
    }
    // console.log(y);
    nested();
}

test();