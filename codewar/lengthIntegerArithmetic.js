function add(augend, addend) {
    // Rewrite this to support at least 100 digits
    var sum = Number(augend) + Number(addend);
    return String(sum);
}

class NumberString {
    constructor(val) {
        this.data = val;
    }
}

function Number(v) {
    return new NumberString(v);
}

add('1', '2');