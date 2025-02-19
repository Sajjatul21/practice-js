class MathUtility {
    // 
    static square(x) {
        return x * x;
    }
    cube(x) {
        return x * x * x;
    }
}

console.log(MathUtility.square(2));

const obj = new MathUtility();
console.log(obj.cube(3));

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static CreateAdmin() {
        return new User("Sajjatul", 26);
    }
}

/* const user = new User("Sajjatul", 26);
console.log(user); */

const admin = User.CreateAdmin();
console.log(admin);

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    print() {
        console.log(this.name, this.email);
    }
    static create() {
        let person = JSON.parse(str);
        return new Person(person.name, person.email);
    }
}

let str = '{ "name": "Shhab", "email": "shihab@emial.com" }';
let p1 = Person.create(str);
console.log(p1);

console.log(p1 instanceof Person);
p1.print();