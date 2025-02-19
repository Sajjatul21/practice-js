//synchronous
console.log("step 1: start");
console.log("step 2: processing...");
console.log("step 3: end");

// asynchronous

console.log("Step 1: Start");
setTimeout(() => {
    console.log('Step 2: Processing');
}, 1000);
console.log("Step 3: End");

console.log("I am line one");
setTimeout(() => {
    console.log("i am line tow");
}, 3000);
setTimeout(() => {
    console.log("i am line three");
}, 0);

console.log("I am line four");

setTimeout(() => {
    console.log("i am line fivse");
}, 1000);