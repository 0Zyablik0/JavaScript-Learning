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


// Classes as Interfaces

interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    study(hours: number): void {
        for (let i = 0; i < hours; i++) {
            console.log("...studying...");
        }
    }
}

// Implementing Multiple Interfaces

interface Graded {
    grades: number[];
}

interface Reporter {
    report: () => string;
}

class ReportClass implements Graded, Reporter {
    grades: number[];

    constructor(grades: number[]) {
        this.grades = grades;
    }

    report() {
        return this.grades.join(", ")
    }

}

//Extending a Class

class StudentTeacher extends Teacher {
    learn() {
        console.log("Learning....")
    }
}

let studentTeacher = new StudentTeacher();
studentTeacher.sayHello();
studentTeacher.learn();

// Extension Assignability

class Lesson {
    subject: string;

    constructor(subject: string) {
        this.subject = subject;
    }
};

class OnlineLesson extends Lesson {
    url: string;

    constructor(subject: string, url: string) {
        super(subject)
        this.url = url
    }
};

let lesson: Lesson;
lesson = new Lesson("coding")
lesson = new OnlineLesson("coding", "oreilly.com");

let online: OnlineLesson;
online = new OnlineLesson("coding", "oreilly.com");

// Overridden Methods

class GradeCounter {
    countGrades(grades: string[], letter: string) {
        return grades.filter(grade => grade === letter).length;
    }
}

class FailureCounter extends GradeCounter {
    countGrades(grades: string[], letter: string): number {
        return super.countGrades(grades, "F")
    }
}

//Overridden Properties

class Assignment {
    grade?: number;
}

class GradeAssignment extends Assignment {
    grade: number;

    constructor(grade: number) {
        super();
        this.grade = grade // Should be assignable to be Overridden
    }

}

// Abstract Class

abstract class AbstractSchool {
    readonly name: string

    constructor(name: string) {
        this.name = name
    }

    abstract getStudentTypes(): string[];
}

class Preschool extends AbstractSchool {
    getStudentTypes(): string[] {
        return ["preschooler"]
    }
};

let school: AbstractSchool;
school = new Preschool("Preschool");

// Member Visibility

class Base {
    isPublicImplicit = 0;
    public isPublicExplicit = 1;
    protected isProtected = 2;
    private isPrivate = 3;
    #truePrivate = 4;
}

class Subclass extends Base {
    examples() {
        this.isPublicExplicit
        this.isPublicExplicit
        this.isProtected
    }
}

new Subclass().isPublicExplicit;
new Subclass().isPublicImplicit;

class TwoKeyWords {
    private readonly name: string;
    constructor(name: string) {
        this.name = name;
    }

    print() {
        console.log(this.name)
    }
}

// Static Field Modifiers

class Question {
    protected static readonly answer: string = "bash";
    protected static readonly prompt: string = `What's an ogre's favorite programming language`
}
