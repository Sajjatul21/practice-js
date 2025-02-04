function testMe() {
    console.log(this);
}
// testMe();

let obj = {
    name: "Shihab",
    print: function () {
        // console.log(this);
        // let self = this;
        setTimeout(() => {
            console.log(this);
            console.log(`Hello ${this.name}`);
        }, 1000);
    }
};

obj.print();