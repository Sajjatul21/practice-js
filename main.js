var persons = [
    {
        name: "A",
        age: 24
    },
    {
        name: "B",
        age: 19
    },
    {
        name: "C",
        age: 25
    },
    {
        name: "D",
        age: 21
    }
];

var arr = [5, 4, 3, 8, 1, 7, 0, 6, 5, 7, 2];
arr.sort();
console.log(arr);
var arr1 = [5, 4, 3, 8, 1, 7, 0, 6, 5, 7, 2, -1, -4, -8];
arr1.sort(function (a, b) {
    if (a > b) {
        // return 1;
        return -1;
    }
    else if (a < b) {
        // return -1;
        return 1;
    }
    else {
        return 0;
    }
});
console.log(arr1);

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    else if (a.age < b.age) {
        return -1;
    }
    else {
        return 0;
    }
});

console.log(persons);

var res1 = arr1.every(function (value) {
    return value >= 0;
});
console.log(res1);

var res3 = arr.some(function (value) {
    return value % 2 == 1;
});
console.log(res3);
var arr2 = [5, 4, 3, 8, 1, 7, 6, 5, 7, -2];
var res4 = arr2.some(function (value) {
    return value < 0;
});

console.log(res4);