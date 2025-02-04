function sqr(n = 1) {

    return n * n;
}
console.log(sqr());

function great(name = 'Sajjatul', msg) {
    console.log(name.length);
    console.log(`${msg}! ${name}`);
}

great(null, "Hello");