var name={
    first: 'George',
    last: 'Guo'
}

var person={
    name: name,
    sex: 'M'
}

var person2 = {...person};
person2.name.first = 'Andy';
person2.sex = 'F';

var another = Object.create(person);
console.log(person);
console.log(person2);
console.log(another);


// ########################################
function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
}

function Rectangle() {
    Shape.call(this); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'