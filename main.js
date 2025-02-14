for (var i = 0; i < 5; i++) {
    console.log((i + 1), "Sajjatul Islam");
}

for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

var sum = 0;
for (var i = 0; i <= 10; i++) {
    console.log(sum + " + " + i + " = " + (sum + i));
    sum += i;
}
console.log("Total sum", sum);