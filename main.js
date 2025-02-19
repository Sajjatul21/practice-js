/* function myPromise (){
    return Promise.resolve("test value")
}

console.log(myPromise()) */

/* async function  test() {
    return 'test'
}
test().then(v=>console.log(v)) */

let p1 = new Promise(resolve => setTimeout(resolve, 3000, 'Test Value'));
async function myAsyncFunc() {
    // p1.then(v=>console.log(v))
    let v = await p1;
    console.log("test");
    console.log(v);

}
myAsyncFunc();

async function fetchDate() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(res)
        let data = await res.json();
        // console.log(data);
        let names = data.map(u => u.name);
        console.log(names);
    }
    catch (e) {
        console.log(e.message)
    }
}
fetchDate();

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]
async function promiseAll() {
    let result = await Promise.all (promises)
    console.log(result)
}
promiseAll()