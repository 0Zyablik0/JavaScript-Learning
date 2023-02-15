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

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) =>  undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }

}

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix)
console.log(new SymmetricMatrix(2) instanceof Matrix)
console.log(new Matrix(2, 2) instanceof SymmetricMatrix)
console.log([1] instanceof Array)