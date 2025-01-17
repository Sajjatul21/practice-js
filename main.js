function display(some) {
    console.log(some);
}

function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

 calculator(5, 5, display);

 calculator(10,20,function(result){
    console.log(result)
 })

