function sum() {
    let sum = 0;
    // console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));

function add(...rest) {
    return rest.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3, 4, 5))