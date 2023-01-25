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

    getValue(key: Key){
        if (key === this.key){
            return this.value
        }
        return undefined
    }
}

const storage = new Secret(123, "value");
let val = storage.getValue(123);

