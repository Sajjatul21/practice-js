let a = { a: 10 }, b = { b: 20 };
let weakMap = new WeakMap([
    [a, 45],
    [b, 67]
]);

console.log(weakMap);