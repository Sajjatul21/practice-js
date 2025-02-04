let arr = [1, 2, 3, 4];
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

let iterate = arr[Symbol.iterator]();
console.log(iterate);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

var str = "TEXT";
let iterateText = str[Symbol.iterator]();
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());