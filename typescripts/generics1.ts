interface LengthWise {
    length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
    console.log(`Length is ${arg.length}`);
    return arg;
}


loggingIdentity('Hello');