let s1 = Symbol();
let s2 = Symbol("Test symbol");

console.log(s1);
console.log(s2);
console.log(s1 == s2);

let toss = {
    Head: Symbol("Head"),
    Tail: Symbol("Tail")
};

console.log(toss.Head);
console.log(toss.Tail);