var a = 10;
var b = 40;
var c = 20;

if (a > b && a > c) {
    console.log('a is greater than b and c');
}
else if (b > a && b > c) {
    console.log("b is greater than a and c");
}
else {
    console.log('c is large');
}


a = 50;
b = 40;
c = 20;


if(a>b || a>c){
    console.log('a is large')
}
else if (b>a|| b>c){
    console.log('b is large')
}
else{
    console.log('c is large')
}


var check = !(a>b)
console.log(check)