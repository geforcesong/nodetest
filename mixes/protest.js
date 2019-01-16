class Person{
    constructor(name){
        this.name = name;
    }

    disp(){
        console.log(`hello ${this.name}!`);
    }

    toString(){
        return Object.prototype.toString.call(this.name)
    }
}

var p = new Person( 'GG');
p.disp();


console.log(Object.prototype.toString.call(p));
console.log(p.toString());