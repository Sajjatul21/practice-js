
/* var name = ''
/* var name = 'Sajjatul'

var fullName = ""

if(name.length == 0){
    fullName = 'Shihab'
}
else{
    fullName = name;
}

console.log(fullName) */

var name = ''
var fullName = name || "Shihab"
console.log(fullName)

var isOk = true;
isOk && console.log("Everything is okay")