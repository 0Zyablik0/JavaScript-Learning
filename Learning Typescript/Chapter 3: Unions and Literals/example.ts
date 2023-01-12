// Union types
let mathematician: string | undefined = Math.random() > 0.5 ? undefined : "Mark Goldberg";

let thinker: null | string = null;
if (Math.random() > 0.5) {
    thinker = "Susanne Langer";
}

// Narrowing : Assignment narrowing


let admiral: number | string;
admiral = "Grace Hopper";
admiral.toLowerCase()


// Narrowing : Conditional narrowing
let scientist: string | number = Math.random() > 0.5 ? "Rosalind Franklin" : 42;

if (scientist === "Rosalind Franklin") {
    scientist.toUpperCase();
}


// Narrowing : typeof checks


let researcher: string | number = Math.random() > 0.5 ? "Rosalind Franklin" : 42;
if (typeof researcher === "string") {
    researcher.toUpperCase();
} else {
    researcher.toFixed();
}

// Literal types

const philosopher = "Hypatia"  // Literal type

let lifespan: number | "ongoing" | "uncertain";

lifespan = 89;
lifespan = "ongoing"


// Literal Assignability

// Type Aliases
type RawData = boolean | number | string | null | undefined;
let rawDataFirst: RawData;
let rawDataSecond: RawData
let rawDataThird: RawData

// Combining Type Aliases
type IdMaybe = Id | undefined | null;
type Id = number | string
