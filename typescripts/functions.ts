// overload
function add(x: number): number;
function add(x: string): string;
function add(x): any {
    if (typeof x === 'string') {
        return x + '100';
    }
    return x + 200;
}


console.log(add(10));
console.log(add('10'));