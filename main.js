function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

let iterate = generator();
console.log(iterate);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());


var arr = [1, 2, 3];
function* generator1(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i];
    }
}
let iterate1 = generator1(arr);
console.log(iterate1.next());
console.log(iterate1.next());
console.log(iterate1.next());
console.log(iterate1.next());
console.log(iterate1.next());


let obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function* () {
        let currentValue = this.start;
        while (currentValue <= this.end) {
            yield currentValue++;
        }
    }
};

let iterate3 = obj[Symbol.iterator]();
console.log(iterate3.next());
console.log(iterate3.next());
console.log(iterate3.next());
console.log(iterate3.next());
console.log(iterate3.next());
console.log(iterate3.next());