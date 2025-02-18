var globalVar = 'I am global variable'

function exampleFunction(){
    var functionVar = " I am function-scope variable"
    console.log(globalVar)
    console.log(functionVar)
}

exampleFunction()

if(true){
    let blockVar  = 'I am block-scope variable'
    console.log(blockVar)
}
// console.log(blockVar) referenceError 
