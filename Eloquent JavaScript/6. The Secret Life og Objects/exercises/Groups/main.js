class Group {
    constructor() {
        this.data = [];
    }

    has(value) {
        this.data.includes(value);
    }

    add(value) {
        if (!this.has(value)) {
            this.data.push(value);
        }
    }

    delete(value) {
        this.data = this.data.filter(v => v !== value)
    };

    static from(iterable) {
        let result = new Group()
        for (let v of iterable) {
            result.add(v)
        }
        return result
    }
}