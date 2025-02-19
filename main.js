function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));

function sum2(a, b, ...rest) {
    console.log(a, b);
    return rest.reduce((a, b) => a + b);
}
console.log(sum2(1, 2, 3, 4, 5));


var arr = [1, 2, 3, 4, 5];
console.log(...arr);

var obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};
/* var obj2 = Object.assign({}, obj);
obj2.e = 50;
console.log(obj);
console.log(obj2); */

var obj2 = {
    ...obj
};
obj2.e = 50;
console.log(obj);
console.log(obj2);