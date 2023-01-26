//Top types

//any

let anyValue: any;
anyValue = 1;
anyValue = "anyValue";
anyValue = true;

console.log(anyValue);

//unknown

function greetComedian(name: unknown): void {
    if (typeof name === "string") {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Well, I'm off.")
    }

}

//Type Predicates

function isNumberOrString(value: unknown): value is number | string {
    return ["number", "string"].includes(typeof value)

}

function logValueIfExists(value: number | string | null | undefined): void {
    if (isNumberOrString(value)) {
        console.log(value.toString());
    } else {
        console.log("Value does not exist")
    }
}


interface Comedian {
    funny: boolean;
}

interface StandupComedian extends Comedian {
    routine: string;
}

function isStandupComedian(value: Comedian): value is StandupComedian {
    return "routine" in value
}

function PrintComedian(comedian: Comedian): void {
    if (isStandupComedian(comedian)) {
        console.log(comedian.routine);
    }
    console.log(comedian.funny);
}

// Type Operators: keyof

interface Ratings {
    audience: number;
    critics: number;
}


function getRating(ratings: Ratings, key: keyof Ratings): number {
    return ratings[key];
}


// Type Operators: typeof
const original = {
    medium: "movie",
    title: "Mean Girls",

};

let adaptation: typeof original;

adaptation = {
    medium: "play",
    title: "Mean Girls",
}

// Type Operators: keyof typeof

const ratings = {
    imdb: 8.4,
    metacritic: 82,
}

function logRatings(key: keyof typeof ratings){
    console.log(ratings[key]);
}

logRatings("imdb");

//Type Assertions:


const rawData = `["grace", "frankie"]`;

let json_any = JSON.parse(rawData) // type: any
let json_string = JSON.parse(rawData) as string // type: string
let json_array = JSON.parse(rawData) as [string, string] // type: [string, string]
let json_concrete = JSON.parse(rawData) as ["grace", "frankie"]; //type: ["grace", "frankie"]
