// var arr = [1, 2, 52, 70, 2, 74, 83, 26];

var arr = [
    [87, 56, 79, 100],
    [58, 78, 98, 90],
    [96, 79, 45, 99]
];

/* console.log(arr[0])
console.log(arr[1])

console.log(arr[0][0]) */



for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log("Element " + i + ": " + arr[i][j]);
    }
} 