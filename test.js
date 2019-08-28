function A(){
    console.log(this === global);
    console.log(this instanceof A);
    console.log(this);
}

A()