function testMe() {
    console.log(this);
}

testMe();

let obj = {
    name: "Shihab",
    print: function () {
        console.log(this);
    }
};

obj.print();