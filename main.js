var globalVar = "I am a global variable";

function exampleFunction() {
    var functionVar = "I am a function scope variable";
    console.log(globalVar);
    console.log(functionVar);
}
exampleFunction();

console.log(globalVar);
// console.log(functionVar)