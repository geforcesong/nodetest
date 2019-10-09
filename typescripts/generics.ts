import {Person} from './person';

function echo<T>(v: T): T {
    return v;
}

var m = echo(1); // number
var n = echo(''); // string

class Manager extends Person {}

class Admin extends Person {}

function personEcho<T extends Person>(p: T): T {
    return p;
}

const person =  new Person('a','b');
const admin =  new Admin('a','b');
const manager =  new Manager('a','b');

const p1 = personEcho(person); //person 
const p2 = personEcho(manager); // manager
const p3 = personEcho(admin); // admin