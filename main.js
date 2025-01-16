var arr1 = [23, 43, 64];
var arr2 = [65, 83, 94];
var arr3 = [5, 85, 90];

function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var result = sumOfArray(arr1);
console.log(result);


function person(name, email) {
    return {
        name: name,
        email: email
    };
}

var p1 = person("Shihab", 'dev.sajjatul@gmail.com');
console.log(p1);
