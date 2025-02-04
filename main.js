let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

let objKey = { name: 'Shihab' };
map.delete(objKey);
map.delete("c");
console.log(map.get('a'));
console.log(map);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

for (let [key, value] of map) {
    console.log(key, value);
}

map.forEach(function (value, key) {
    console.log(value, key);
});