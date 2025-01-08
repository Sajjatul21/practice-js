var i = 0;
while (i < 3) {
    console.log(i, 'shihab');
    i++;
}


var isRunning = true;
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1);
    if (rand == 9) {
        console.log('winner winner chicken dinner');
        isRunning = false;
    }
    else {
        console.log("You have got", rand);
    }
}