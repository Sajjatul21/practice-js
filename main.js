var arr = [1, 4, 3, 9, 8, 5, 7];

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    /* arr[i] = arr[i] + 2;
    console.log(arr[i]); */
    sum += arr[i];
}
console.log(sum);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}