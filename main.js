let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
]);

map.set("e", 5);
/* map.set({name: "Shihab"}, 6)
 */
let objKey = { name: "Shihab" };
map.set("objKey", 6);
map.delete('c');
map.delete("objKey");
console.log(map);
console.log(map.get("d"));
console.log(map.get("objKey"));

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

for (let [k, v] of map) {
    console.log(k, v);
}

map.forEach((v, k) => console.log(v, k));