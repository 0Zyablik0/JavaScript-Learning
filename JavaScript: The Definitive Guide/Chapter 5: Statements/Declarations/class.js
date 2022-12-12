export default class Circle {
    constructor(radius) { this.radius = radius; }
    area() { return this.radius * this.radius * Math.PI; }
    circumference() { return 2 * this.radius * Math.PI; }
}