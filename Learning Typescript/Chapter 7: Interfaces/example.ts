interface PoetInterface {
    born: number;
    name: string;
}


let poetExample: PoetInterface;
poetExample = {
    born: 1935,
    name: "Sara Tearsdile",

}

//Optional properties

interface BookInterface {
    author?: string;
    pages: number;
};

// Read-only properties

interface PageInterface {
    readonly text: string;
};

function readPage(page: PageInterface) {
    console.log(page.text) // cannot assign page.text = "some text"
}

//Functions and Methods

interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
}

const hasBothFunctionTypes: HasBothFunctionTypes = {
    property: () => "",
    method() {
        return "";
    },
}

hasBothFunctionTypes.method();
hasBothFunctionTypes.property();


interface OptionalReadOnlyFunctions {
    readonly optionalProperty?: () => string;
    optionalMethod?(): string;
}

// Call Signatures

type FunctionAlias = (input: string) => number;
interface CallSignature {
    (input: string): number;
}

const typedFunctionAlias: FunctionAlias = (input) => input.length;
const typedCallSignature: CallSignature = (input) => input.length;


interface FunctionWithCount {
    count: number;
    (): void;
}

let hasCallCount: FunctionWithCount;

function keepTrackOfCalls() {
    keepTrackOfCalls.count += 1;
    console.log(`I've been called ${keepTrackOfCalls.count}`)

}

keepTrackOfCalls.count = 0;

hasCallCount = keepTrackOfCalls;

// Index Signatures

interface WordCounts {
    [i: string]: number;
}

let counts: WordCounts = {};
counts.apple = 0;
counts.banana = 1;