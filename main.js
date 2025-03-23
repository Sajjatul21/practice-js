var arr = [1, 2, 52, 6, 2, 74, 83, 26];

var find = 10;
var isFound = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log('date find at index ', i);
        isFound = true;
        break;

    }
}
if (!isFound) {
    console.log('Date not found');
}   