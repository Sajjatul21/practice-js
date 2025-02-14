var date = new Date();
// 0 - sunday, 1 - monday, 2 - tuesday
var today = date.getDay();
console.log(today);
switch (today) {
    case 0:
        console.log("To Day is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;

    case 3:
        console.log("To Day is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    case 5:
        console.log("To Day is Thursday");
        break;
    case 6:
        console.log("Today is Friday");
        break;
    default:
        console.log("day is not available");


}
