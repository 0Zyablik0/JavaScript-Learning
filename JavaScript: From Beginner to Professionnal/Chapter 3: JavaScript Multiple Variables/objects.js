// Arrays are special objects!

let arr = [1, 2, 3]
console.log(typeof arr)

// Objects:

let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBitter: true,
};
console.log(typeof dog);
console.log(dog);


let dogColor1 = dog["color"];
let dogColor2 = dog.color;
console.log(dogColor1, dogColor2);

// Updating objects

dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog);


// Objects in objects


let company = {
    companyName: "Moogle",
    activity: "Search Engine",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "123456",
        city: "Muhosransk",
        state: "Zazhopisk",
    },
    yearOfEstablishment: 2022,
}
console.log(company);
console.log(company.address);
console.log(company.address.city)



// Arrays in objects

company = {
    companyName: "Moogle",
    activities: ["Search Engine", "Advert", "Hosting"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "123456",
        city: "Muhosransk",
        state: "Zazhopisk",
    },
    yearOfEstablishment: 2022,
}
console.log(company.activities[1]);