class A {
    constructor() {
        this.name = 'A';
        return {
            m: 1
        };
    }

    display() {
        console.log(this);
    }
}

var c = new A()
console.log(c);
