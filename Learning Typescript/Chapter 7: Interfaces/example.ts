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


// Nested Interfaces
interface Novel {
    author: {
        name: string;
    }
    setting: Setting;
}

interface Setting {
    place: string;
    year: number;
}

let novel: Novel = {
    author: {
        name: "Jane Austen"
    },
    setting: {
        place: "England",
        year: 1812,

    }
}

// Interface Extension

interface WrittenArt {
    title: string;
}

interface Novella extends WrittenArt {
    pases: number;
};

// Extend Multiple Interfaces

interface GivesNumber {
    giveNumber(): number;
}

interface GivesString {
    giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string;
}

function useGiveBoth(arg: GivesBothAndEither) {
    arg.giveEither();
    arg.giveNumber();
    arg.giveString();
}

// Interface Merging

interface Merged {
    firstProperty: string;
}

interface Merged {
    secondProperty: string;
}

let merged: Merged = {
    firstProperty: "first",
    secondProperty: "second",
};