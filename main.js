function add(a, b) {
    return a + b;
}
// a function can be stored ina a variable
var sum = add;
console.log(sum(3, 4));
// a function can be stored in an array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](2, 2));
// a function ca be stored in an object
var obj = {
    sum: add
};
console.log(obj);
console.log(obj["sum"](3, 3));

// we can create a function as need
setTimeout(function () {
    console.log("I have created");
}, 1000);