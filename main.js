function sqr(n = 1) {
    /* if (!n) {
        return 1;
    } */
    /* n = n || 1; */
    return n * n;
}
console.log(sqr());

function greet(name = "Sajjatul", msg) {
    console.log(name.length);
    console.log(`${msg}! ${name}`);
}
greet(null, "Hello");