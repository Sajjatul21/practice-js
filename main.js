var arr = [2, 5, 2, 7, 8, 5, 4, 9, 5, 8, 4];

/* function filter (arr){
    var newArray = []

    for(var i = 0;i<arr.length;i++){
        if(arr[i]%2==0){
            newArray.push(arr[i])
        }
        
    }
    return newArray
}

var odd = filter(arr)
console.log(odd) */

function filter(arr, callback) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        /* if (callback(arr[i])){
        newArray.push(arr[i])
    } */
        callback(arr[i]) && newArray.push(arr[i]);
    }
    return newArray;
}

var odd = filter(arr, function (value) {
    return value % 2 == 0;
});
console.log(odd);