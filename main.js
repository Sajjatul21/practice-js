function test(a, b, c) {
    // console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
test(1, 2, 3);