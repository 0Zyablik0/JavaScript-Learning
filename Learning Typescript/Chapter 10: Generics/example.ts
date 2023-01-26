// Generic Functions

function identity<T>(value: T): T {
    return value;
}

const numeric = identity(10)
const string = identity('string')


const arrowIdentity = <T>(input: T): T => { return input }

let numReturn = arrowIdentity(7);

//Explicit Generic Call Types


function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log(input);
        callback(input);
    }

};

logWrapper<string>((input) => { console.log(input.length) })
//Multiple Function Parameters

function makeTuple<First, Second>(first: First, second: Second) {
    return [first, second] as const;
}

let tuple = makeTuple(10, "string")


// Generic Class

class Secret<Key, Value>{
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
        this.key = key
        this.value = value
    }

    getValue(key: Key) {
        if (key === this.key) {
            return this.value
        }
        return undefined
    }
}

const storage = new Secret(123, "value");
let val = storage.getValue(123);

//Explicit Generic Class Types

class CurriedCallback<Input>{
    #callback: (input: Input) => void;

    constructor(callback: (input: Input) => void) {
        this.#callback = (input: Input) => {
            console.log("Input", input);
            callback(input);
        }
    }

    call(input: Input): void {
        this.#callback(input);
    }
}

new CurriedCallback((input: string) => {
    console.log(input.length)
});

new CurriedCallback<string>((input) => {
    console.log(input.length)
});

//Extending Generic Classes

class QuoteClass<T>{
    lines: T;
    constructor(lines: T) {
        this.lines = lines;
    }

}

class SpokenQuoteClass extends QuoteClass<string[]>{
    speak() {
        console.log(this.lines.join('\n'));
    }
}

class AttributedQuoteClass<Value> extends QuoteClass<Value>{
    speaker: string;
    constructor(value: Value, speaker: string) {
        super(value);
        this.speaker = speaker;
    };
}

// Implementing Generic Interfaces

interface ActorCredit<Role> {
    role: Role;
}

class MoviePart implements ActorCredit<string>{
    role: string;
    speaking: boolean;

    constructor(role: string, speaking: boolean) {
        this.role = role;
        this.speaking = speaking;
    };
}

//Method Generics

class CreatePairFactory<Key> {
    key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    createPair<Value>(value: Value) {
        return { key: this.key, value }
    }
}

const factory = new CreatePairFactory("role")
const numberPair = factory.createPair(10)
const stringPair = factory.createPair("Sophie")

// Generic Type Aliases

type Nullish<T> = T | undefined | null


type CreatesValue<Input, Output> = (input: Input) => Output;
let creator: CreatesValue<string, number>;

creator = text => text.length;

// Generic Discriminated Unions

type Result<Data> = FailureResult | SuccessResult<Data>;

interface FailureResult {
    error: Error;
    succeeded: false;
};

interface SuccessResult<Data> {
    data: Data;
    succeeded: true;
};

function handleResult(result: Result<string>) {
    if (result.succeeded) {
        console.log(result.data)
    } else {
        console.log(result.error)
    }
}

//Generic Defaults

interface GenericWithDefault<T = string> {
    value: T;
}

let explicit: GenericWithDefault<number> = { value: 10 };
let implicit: GenericWithDefault; // string


interface KeyValuePair<Key, Value = Key> {
    key: Key;
    value: Value;
}

let allExplicit: KeyValuePair<string, number> = {
    key: "rating",
    value: 10,
}

let oneDefault: KeyValuePair<number> = {
    key: 0,
    value: 10,
}

// Constrained Generic Types

interface WithLength {
    length: number;
}

function printLength<T extends WithLength>(value: T) {
    console.log(value.length)
}

printLength("Hello world!")
printLength([1, 2, 3, 4])