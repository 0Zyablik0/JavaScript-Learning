
// Classes and Objects
class ClassName {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

let obj = new ClassName("arg1", "arg2");
console.log(obj)

class Dog {
    constructor(name, breed, weight, color) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.color = color;
    }
}

let my_dog = new Dog("Mars", "corgi", 10.0, "grey");
console.log(my_dog);


// Methods

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log(`Hi, ${this.firstName} ${this.lastName}`)
    }
}

let p = new Person("Artem", "Kryukov")
p.greet()


//Properties, getters, setters

class PrivatePerson {
    #firstName
    #lastName
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = firstName;
    }

    get firstName() {
        return this.#firstName
    }

    set firstName(firstName) {
        this.#firstName = firstName
    }

    get lastName() {
        return this.#lastName
    }

    set lastName(lastName) {
        this.#lastName = lastName
    }
}

//Inheritance

class Vehicle {
    #type
    constructor(color, currentSpeed, type) {
        this.color = color
        this.currentSpeed = currentSpeed
        this.#type = type
    }
    get type() {
        return this.#type
    }
    move() {
        console.log("moving at ", this.currentSpeed)
    }

    accelerate(amount) {
        this.currentSpeed += amount
    }

}


class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, fuel) {
        super(color, currentSpeed, "motorcycle");
        this.fuel = fuel;
    }
    doWheelie(){
        console.log("Driving on one wheel!");
    }

}


let m = new Motorcycle("black", 0, "gasoline");
console.log(m, m.type);
m.accelerate(100);
m.move();
m.doWheelie();


// Prototypes

console.log(Motorcycle.prototype)