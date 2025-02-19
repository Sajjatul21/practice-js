let set = new Set([1, 2, 3]);
set.add(4);
set.add(5);
set.add(6);
set.add(1);

// set.clear()
// set.delete(5)
// console.log(set.has(4));

console.log(set.keys());
console.log(set.values());

let keyIterate = set.keys();
console.log(keyIterate.next());
console.log(keyIterate.next());
console.log(keyIterate.next());
console.log(keyIterate.next());
console.log(keyIterate.next());
console.log(keyIterate.next());


let valueIterate = set.values();
console.log(valueIterate.next());
console.log(valueIterate.next());
console.log(valueIterate.next());
console.log(valueIterate.next());
console.log(valueIterate.next());
console.log(valueIterate.next());
console.log(valueIterate.next());
console.log(valueIterate.next());
console.log(valueIterate.next());