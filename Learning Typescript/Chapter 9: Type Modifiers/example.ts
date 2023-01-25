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