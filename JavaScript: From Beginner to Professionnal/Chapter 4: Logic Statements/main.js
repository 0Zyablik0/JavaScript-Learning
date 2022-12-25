// if and else if

let rain = true;

if (rain) {
    console.log("It's raining!");
}
else {
    console.log("It is not raining!");
}

// else if statements

let age = 28;

if (age < 18) {
    console.log("Child");
} else if (age <= 30) {
    console.log("Young");
} else if (age <= 59) {
    console.log("Middle Aged");
}
else {
    console.log("Old");
}

// conditional ternary operators


let access = age < 18 ? "forbidden" : "allowed";
console.log(access);

// switch statement

let trafficLight = "green";

switch (trafficLight) {
    case "green": 
        console.log("Go!!");
        break;
    case "yellow": 
        console.log("Ready...");
        break;
    case "red": 
        console.log("Stop.");
        break;
    default:
        console.log("Traffic light is broken");
}

// Combining  Cases

let grade = "C";

switch(grade){
    case "F":
    case "D":
        console.log("You have failed!")
        break;
    case "C":
    case "B":
        console.log("You've passed!")
        break;
    case "A":
        console.log("Very well!!!")
        break;
    default:
        console.log("This is not a grade")

}

