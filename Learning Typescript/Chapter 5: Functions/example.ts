function sing(song: string) {
    console.log(`sining ${song}`);
}

// Required Parameters

function singTwo(firstSong: string, secondSong: string) {
    console.log(`sining ${firstSong} and ${secondSong}`);
}

singTwo("a", "b"); // singTwo("a"), singTwo("a", "b", "c") causes errors

//Optional Parameters

function announceSong(song: string, singer?: string) {
    console.log(`Song ${song} announce`)
    if (singer) {
        console.log(`Singer: ${singer}`)
    }
}

announceSong("Unknown Song")
announceSong("My Song", "Me")
announceSong("Undefined Song", undefined)


// Default Parameters

function rateSong(song: string, rating = 0) {
    console.log(`${song} gets ${rating}/5 stars`)
}

rateSong("Photograph");
rateSong("Set Fire to the Rain", 5);
rateSong("Set Fire to the Rain", undefined);

// Rest Parameters 

function singAllTheSongs(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song} by ${singer}`)
    }
}

singAllTheSongs("Alicia Keys");
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance");

// Return Types

function sum(a: number, b: number) {
    return a + b;
}

let c = sum(1, 2);

function del(a: number, b: number) {
    if (b == 0) return undefined;
    return a / b;
}

let d = del(1, 2);


// Explicit Return Types

function stringLength(s: string): number {
    return s.length
}
// Function Types

let func = function (): string { return "" }


//Function Type Parentheses

let returnsStrOrUndefined: () => string | undefined;
let returnsStr: (() => string) | undefined;

// Parameter Type Inferences

let singer: (song: string) => string
singer = function (song) { return `Singing: ${song.toUpperCase()!}` }
// Function Type Aliases

type StringToNumber = (s: string) => number;
type NumberToString = (n: number) => string;

function usesNumberToString(numberToString: NumberToString) {
    numberToString(0);
}

usesNumberToString((input) => { return `${input}!` })

// void

function message(m: string): void {
    console.log(m);
}

// never

function err(): never {
    throw new Error("Error")
} // this function never returns


