function testMe() {
    console.log(this);
}

testMe();

let obj = {
    name: "Shihab",
    print: function () {
        let self = this;
        setTimeout(function () {
            console.log(`Hello ${this.name}`);
        }.bind(this), 1000);
    }
};

obj.print();