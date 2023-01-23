//Top types

//any

let anyValue: any;
anyValue = 1;
anyValue = "anyValue";
anyValue = true;

console.log(anyValue);

//unknown

function greetComedian(name: unknown): void {
    if (typeof name === "string"){
        console.log(name.toUpperCase());
    }
    else {
        console.log("Well, I'm off.")
    }

}