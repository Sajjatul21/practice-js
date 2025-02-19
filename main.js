/* const delay = s=> new Promise(resolve=>setTimeout(resolve,s * 1000))

delay(2).then(()=>console.log('2 Second Delay'))
delay(1).then(()=>console.log('1 Second Delay'))
delay(3).then(()=>console.log('3 Second Delay'))
delay(5).then(()=>console.log('5 Second Delay'))
delay(4).then(()=>console.log('4 Second Delay')) */

/* let p1 = Promise.resolve('Test');
console.log(p1);
p1.then(v => console.log(v));
let p2 = Promise.reject("REject");
console.log(p2);
p2.catch(e => console.log(e)); */

/* let p1 = Promise.resolve('One')
let p2 = Promise.resolve('two')
let p3 = Promise.resolve('three')
let p4 = Promise.resolve('four')
let p = [p1, p2, p3, p4]

Promise.all(p)
.then(arr=>console.log(arr)) */

let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'One');
});

let p2 = new Promise(resolve => {
    setTimeout(resolve, 1000, 'tow');
});

let p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'three');
});

let promiseArr = [p1, p2, p3];
Promise.all(promiseArr)
    .then(arr => console.log(arr));

Promise.race(promiseArr)
    .then(arr => console.log(arr));