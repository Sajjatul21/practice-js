function testMe() {
    console.log(this);
}

testMe();

let obj = {
    name: "Shihab",
    print: function () {
        let self = this;
        setTimeout(function () {
            console.log(`Hello ${self.name}`);
        }, 1000);
    }
};

obj.print();