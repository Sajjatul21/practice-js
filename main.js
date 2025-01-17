var arr = [1, 2, 3, 4, 5];

function map(arr, callback) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        // var temp = arr[i] * arr[i];

        newArray.push(callback(arr[i]));
    }
    return newArray;
}

var myMap= map(arr,function (value){
    return value * value
})
console.log(myMap)

console.log(map(arr,function(value){
    return value * 10
}))