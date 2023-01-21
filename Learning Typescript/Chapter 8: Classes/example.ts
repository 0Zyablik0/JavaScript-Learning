// Class Methods

class Greeter {
    constructor(greeterName: string) {
        console.log(`My name is ${greeterName}`);

    }

    greet(name: string) {
        console.log(`Hello ${name}!`)
    }
}

new Greeter("Polite Greeter").greet("world")

// Class Properties

class FieldTrip {
    destination: string;
    constructor(destination: string) {
        this.destination = destination;
    }

    go() {
        console.log(`We are going to ${this.destination}`)
    }

}

new FieldTrip("Moscow").go()

// Function Properties

class WithMethod {
    method() { console.log("Method is called") }
}

class WithProperty {
    property = () => { console.log("Property is called") }

}
new WithMethod().method()
new WithProperty().property();

//Initialization Checking

class WithValue {
    immediate = 0;
    later: number;
    maybeUndefined: number | undefined;
    constructor() {
        this.later = 0;
    }
}

// Optional Properties

class MissingInitializer {
    property?: number;
}

// Read-Only Properties;
class Quote {
    readonly text: string;
    constructor(text: string) {
        this.text = text;
    };

}


// Classes as Types

class Teacher {
    sayHello() {
        console.log("Hello!");
    }
}


let teacher: Teacher;
teacher = new Teacher();

class SchoolBus {
    getAttributes(): string[] {
        return ["magic", "shapeShifting"];
    }
}

function withSchoolBus(bus: SchoolBus) {
    console.log(bus.getAttributes());
}

withSchoolBus({
    getAttributes: () => ["hello"]
}) // OK