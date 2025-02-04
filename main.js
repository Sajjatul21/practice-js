let a = { a: 10 }, b = { b: 20 };
/* let set = new Set([a, b]);
a = null;
console.log(set);
let arr = [...set]; 
console.log(arr);*/

let weakSet = new WeakSet([a, b]);
console.log(weakSet);
a = null;
console.log(weakSet.has(a));
console.log(weakSet.has(b));