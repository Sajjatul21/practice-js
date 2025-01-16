var str = 'some thing';
console.log(str.charAt(0));
var str2 = str.charAt(200);
console.log(typeof str2);


var length = 0;
while (true) {
    if (str.charAt(length) == '') {
        break;
    }
    else {
        length++;
    }
}
console.log(length);

console.log('Sajjatul islam'.length)