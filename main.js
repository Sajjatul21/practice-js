var point = {
    x: 10,
    y: 20
};

point.x = 3242;
point.y = 100;
console.log(point);
console.log(point.d);


point['y'] = 500;
var props = 'z';
point[props] = 900;
console.log(point);