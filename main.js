var arr = [1, 4, 3, 9, 8, 5, 7];

for (var i = 0; i < arr.length; i++) {
    // console.log(i);
    // console.log(arr[0]);
    // console.log(arr[i]);
    arr[i] = arr[i] + 2;
    console.log(arr[i]);
}

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log("Total sum:", sum);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}