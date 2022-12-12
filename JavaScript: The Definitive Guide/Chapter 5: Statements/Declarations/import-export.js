import Circle from "./class.js";
import {TAU} from "./const-let-var.js";
import {circle_area} from "./functions.js";

let circle = new Circle(3)
console.log(circle.area(), circle.circumference())

console.log(TAU)
console.log(circle_area(5))