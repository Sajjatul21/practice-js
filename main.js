function testMe() {
    console.log(this);
}
testMe();

let obj = {
    name: "Shihab",
    print: () => {
        console.log(this);
    }
};

obj.print();