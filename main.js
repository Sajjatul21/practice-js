var a = 30;
function x() {
    // var a = 20;
    function y() {
        // var a = 10; 
        console.log(a);
    }
    console.log(a);
    y();
}
x();