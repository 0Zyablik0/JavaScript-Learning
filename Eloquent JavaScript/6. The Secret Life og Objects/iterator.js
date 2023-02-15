class Matrix {
    width = 0;
    height = 0;
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.data = [];
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                this.data[width * i + j] = element(j, i);
            }
        }
    }

    get(x, y) {
        return this.data[y * this.width + x]
    }

    set(x, y, value) {
        this.data[y * this.width + x] = value
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return { done: true };
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y),
        }
        this.x++
        if (this.x == this.matrix.width) {
            this.y++;
            this.x = 0;
        }
        return { value, done: false }
    }
}

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this);
}

let matrix = new Matrix(3, 3, (x, y) => { return `value at [${x}, ${y}]: ${x * y}` })
console.log(matrix);

for (let { x, y, value } of matrix) {
    console.log(x, y, value)
}