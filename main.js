let obj = {
    start: 1,
    end: 5,
    /*  [Symbol.iterator]: function () {
         let currentValue = this.start;
         const self = this;
         return {
             next() {
                 return {
                     done: currentValue > self.end,
                     value: currentValue > self.end ? undefined : currentValue++
                 };
             }
         };
     } */
    [Symbol.iterator]: function* () {
        let currentValue = this.start;
        while (currentValue <= this.end) {
            yield currentValue++;
        }
    }
};

let iterator = obj[Symbol.iterator]();
// console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());