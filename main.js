/* const BASE_URL = 'https://jsonplaceholder.typicode.com';
let res = fetch(`${BASE_URL}/user/1`);
console.log(res); */

/* const BASE_URL = 'https://jsonplaceholder.typicode.com';
fetch(`${BASE_URL}/user/1`)
.then(res=>{
    // console.log(res)
    console.log(res.json())
}).catch(e=>console.log(e)) */

const BASE_URL = 'https://jsonplaceholder.typicode.com';
fetch(`${BASE_URL}/users/1`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return Promise.resolve("something")
    })
    .then(str=>{
        console.log(str)
        return Promise.resolve("Another Promise")
    })
    .then(another=>console.log(another))
    .catch(e => console.log(e));