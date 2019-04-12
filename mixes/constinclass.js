class Person{
    constructor(){
        const name1='George';
    }

    disp(){
        console.log(this.name1);
    }
}

var c= new Person();
c.disp();