var a = 'abc';

if (true) {
    if (true) {
        var b = 'I am B';
        function x() {
            // var a = 20;
            function y() {
                // var a = 10;
                console.log(a);
            }
           
            y();
        }
    }
}
x();
