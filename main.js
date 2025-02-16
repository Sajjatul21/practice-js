var obj = {
    x: 10,
    y: 20
};
// set value using dot notation 
obj.x = 43;
console.log(obj);
// console.log(obj.c)

obj['y'] = 100;
var props = 'z';
obj[props] = 900;
console.log(obj);
delete obj.x;
console.log(obj);