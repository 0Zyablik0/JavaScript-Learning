function doSomething(callback) {
    callback();
}

function sayHi() {
    console.log("Hi")
}

doSomething(sayHi);



function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an A: amazing!");
            break;
        case grade == "B":
            console.log("You got a B: well done!");
            break;
        case grade == "C":
            console.log("You got a C: alright");
            break;
        case grade == "D":
            console.log("You got a D: hmm...");
            break;
        default:
            console.log(grade, "- What?")
    }
}

function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F"
    }
    callback(grade);

}

getGrade(65, judge)
