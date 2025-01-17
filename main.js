var arr = [2, 5, 2, 7, 8, 5, 4, 9, 5, 8, 4];

var filterArr = arr.filter(function(value){
    // return value % 2==0;
    // return value % 2==1;
    return value > 4
})

console.log(filterArr)