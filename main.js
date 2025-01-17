var x = 55;
function test (){
    // var x = 45;
    // console.log(45)
    function nested(){
        // var y = 65;
        console.log(x)
    }
    // console.log(y)
    nested()
}
test()