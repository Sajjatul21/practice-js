let a = 10, b = 20;

var obj = {
    a,
    b,
    print() {
        console.log(this);
    }
};

console.log(obj);
obj.print();