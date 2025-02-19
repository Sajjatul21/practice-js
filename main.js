let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'one');
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'tow');
});
/* 
console.log(p1)
console.log(p2) */

p1.then(v => {
    console.log(v);
}).catch(e => console.log(e));


function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve("I have got an iPhone");
            }
            else {
                reject(new Error("you got Failed"));
            }
        }, 2000);
    });
}

// getIphone(false)
getIphone(true)
    .then(res => console.log(res))
    .catch(e => console.log(e.message));