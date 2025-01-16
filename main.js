var arr = [
    [87, 56, 79, 100],
    [58, 78, 98, 90],
    [96, 79, 45, 99]
];
/* 
console.log(arr[0])
console.log(arr[0][0]) */

for(var i = 0; i<arr.length;i++){
    for(var j = 0 ;j<arr[i].length; j++){
        console.log("Element ",i,": ",arr[i][j])
    }
}