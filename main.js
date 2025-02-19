let a = { a: 10 }, b = { b: 20 };
/* let set = new Set([a, b]);
a = null;

console.log(set);
let arr =[...set]
console.log(arr)
console.log(arr[0])
 */

let weakSets = new WeakSet([a, b]);
a = null;
console.log(weakSets);
console.log(weakSets.has(a));
console.log(weakSets.has(b));
