function mixing(target, ...sources) {
    Object.assign(target, ...sources);
}
var canWalk = {
    walk: function () {
        console.log("Walking...");
    }
};
var canSwim = {
    swim: function () {
        console.log("Swimming...");
    }
};

var canEat = {
    eat: function () {
        console.log("Eating...");
    }
};

/* var person = Object.assign({}, canWalk, canEat);
person.name = "Sajjatul Islam" */;
function Person(name) {
    this.name = name;
}
mixing(Person.prototype, canWalk, canEat);
var person = new Person("Sajjatul");
console.log(person);

function GoldFish(name) {
    this.name = name;
}
mixing(GoldFish.prototype, canEat, canSwim);
var fish = new GoldFish("Oranda");
console.log(fish);
fish.swim()