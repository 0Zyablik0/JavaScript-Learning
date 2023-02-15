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

    [Symbol.iterator] = function () {
        return new GroupIterator(this);
    }

    static from(iterable) {
        let result = new Group()
        for (let v of iterable) {
            result.add(v)
        }
        return result
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group
        this.position = 0
    }

    next() {
        if (this.position == this.group.data.length) {
            return { done: true }
        }
        let value = {
            position: this.position,
            value: this.group.data[this.position],
        }
        this.position++;
        return { value, done: false }
    }
}