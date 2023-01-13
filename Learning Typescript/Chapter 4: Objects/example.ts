// Object Types

const poet = {
    born: 1935,
    name: "Mary Oliver",
}

poet["born"]
poet.name

// Declaring Object Types
type Poet = {
    name: string;
    born: number;
}

let poet_1: Poet;
poet_1 = {
    name: "Sara Teasdale",
    born: 1935,
}

//Structural Typing


type WithFirstName = {
    "firstName": string;
};

type WithLastName = {
    "lastName": string;
};

const hasBoth = {
    firstName: "Artem",
    lastName: "Kryukov",
}

let withFirstName: WithFirstName = hasBoth;
let withLastName: WithLastName = hasBoth;

// Nested Object Types


type Author = {
    "firstName": string;
    "lastName": string;
}

type Poem = {
    "author": Author;
    "title": string;
}

//optional properties

type Book = {
    author?: Author;
    pages: number;
}

type Writers = {
    author: Author | undefined;
    editor?: string;
}

// Unions of object types


let poem = Math.random() < 0.5 ? { "name": "The Double Image", "pages": 7 } : { "name": "Her Kind", rhyme: true };

let poemName = poem.name //string
let poemPages = poem.pages //number | undefined
let poemRhymes = poem.rhyme // boolean | undefined

// Explicit Object-Type Union
type PoemWithPages = {
    "name": string;
    "pages": number;
}

type PoemWithRhymes = {
    "name": string;
    "rhyme": boolean;
}

type UnionPoem = PoemWithPages | PoemWithRhymes

let unionPoem: UnionPoem = Math.random() < 0.5 ? { "name": "The Double Image", "pages": 7 } : { "name": "Her Kind", 'rhyme': true };

unionPoem.name // ok

// Narrowing Object Types

if ("pages" in unionPoem) {
    unionPoem.pages;
} else {
    unionPoem.rhyme;
}

// Discriminated Unions

type PoemWithPages_ = {
    "name": string;
    "pages": number;
    type: "pages";
}

type PoemWithRhymes_ = {
    "name": string;
    "rhymes": boolean;
    type: "rhymes";
}

type DiscriminatedUnionPoem = PoemWithPages_ | PoemWithRhymes_


let discriminatedUnionPoem: DiscriminatedUnionPoem = Math.random() < 0.5 ? { "name": "The Double Image", "pages": 7, type: "pages" } : { "name": "Her Kind", "rhymes": true, type: 'rhymes' };

let type = discriminatedUnionPoem.type;

if (discriminatedUnionPoem.type == "pages") {
    discriminatedUnionPoem.pages;
} else {
    discriminatedUnionPoem.rhymes;
}

// Intersection Types


type Artwork = {
    genre: string;
    name: string;
};


type Writing = {
    pages: number;
    name: string;
};

type WrittenArtwork = Artwork & Writing;

let art: WrittenArtwork;
art = {
    pages: 0,
    name: "",
    genre: "",
}