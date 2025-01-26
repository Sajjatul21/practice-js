var rect = {
    width: 100,
    height: 200,
    draw: function () {
        console.log('I am a rectangle');
        console.log("my width is ", this.width);
        console.log("my height is ", this.height);
    }
};
// console.log(rect.width);
rect.draw(); 
rect.width = 200;
rect.height = 300;
rect.draw(); 