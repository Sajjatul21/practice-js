var n = 10;

var str = '';

if (n % 2 == 0) {
    str = "Even";
}
else {
    str = "Odd";
}
console.log(str);

var result = n % 2 == 0 ? "even" : "Odd";
console.log(result);

/* var name = '';
var fullName = "";
if (name.length == 0) {
    fullName = "Sajjatul";
}
else {
    fullName = name;
}
console.log(fullName);

 */

var name = '';
var fullName = name || "Shihab";
console.log(fullName);

var isOk = true

if (isOk){
    console.log("EveryThing ok")
}

isOk && console.log("Everything is Ok")