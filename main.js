var arr = [1, 2, 3];
function* generator(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i];
    }
}
let iterate = generator(arr);
 console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next()); 
/* console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value); */