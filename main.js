let person = {
    name: "Shihab",
    email: "shihab@example.com",
    address: {
        city: "Chandpur",
        country: "Bangladesh"
    }
};
/* 
let name = person.name;
let email = person.email;
console.log(name);
console.log(email); */

let { name, email, address, address: { city, country } } = person;
console.log(name);
console.log(email);
console.log(address);
console.log(city);
console.log(country);


let arr = [1, 2, 3, 4, 5];
let [first, second, , , last] = arr;
console.log(first);
console.log(second);
console.log(last);