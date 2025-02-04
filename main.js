let set = new Set([1, 3, 4]);

set.add(5);
set.add(9);
set.add(6);
set.add(1);
set.add(2);
console.log(set.size);

// set.clear() 
// set.delete(5)
// console.log(set.has(2));
console.log(set);

console.log(set.keys());
console.log(set.values());

let keyIterate = set.keys();
console.log(keyIterate.next());

let valueIterate = set.values();
console.log(valueIterate.next());

function isIterable(obj) {
    return typeof obj[Symbol.iterator] == 'function';
}
console.log(isIterable(set));

for (let v of set) {
    console.log(v);
}

console.log(set.entries());