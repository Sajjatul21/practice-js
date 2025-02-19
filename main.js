//synchronous
console.log("step 1: start")
console.log("step 2: processing...")
console.log("step 3: end")

// asynchronous

console.log("Step 1: Start")
setTimeout(()=>{
    console.log('Step 2: Processing')
})
console.log("Step 3: End")