 name = 'eric'

function f1(){
    console.log(name);
}

function f2(){
    name='lze';
    f1();
}

f2();
console.log(name);