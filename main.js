function testMe() {
    console.log(this);
}

testMe();

let obj = {
    name: "Shihab",
    print: function () {
        let self = this;
        setTimeout(() => {
            console.log(`Hello ${this.name}`);
        }, 1000);
    }
};

obj.print();