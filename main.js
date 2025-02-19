var arr = [1, 2, 3, 4];

console.log(arr[Symbol.iterator]());

var str = "TEXT";
console.log(str[Symbol.iterator]());

var iterate = arr[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

let iterateText  = str[Symbol.iterator]()
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())