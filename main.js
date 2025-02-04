function testMe() {
    console.log(this);
}
// testMe();

let obj = {
    name: "Shihab",
    print: function () {
        // console.log(this);
        // let self = this;
        setTimeout(function () {
            console.log(this);
            console.log(`Hello ${this.name}`);
        }.bind(this), 1000);
    }
};

obj.print();