var a = 1, b = 2;
var d = 'abc';
function tag(strings, ...values) {
    console.log(strings); // "Hello "
    console.log(values);  // 50
    return "Bazinga!";
}
 
var c = tag`
    {
        book {
            name
            id
            ${a}
            ${d}
            mm
        }
    }
`;

console.log(c);
