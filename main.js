var arr = [1, 2, 52, 6, 2, 74, 83, 26];

var find = 10;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log('date find at index ', i);
        break
    }
    else{
        console.log('date is not found')
    }
}