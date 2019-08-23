// nested
let arr = [{value: 1}, {value: 2}];
const testStr = `
    <ul>
        ${
            arr.map(item=>{
                return `<li>${item.value}</li>`;
            }).join('')
        }
    </ul>
`;
// join is used to remove the extra ,
console.log(testStr);
/**************************************************************/
let x = 'Hi', y = 'Kevin';
var res = message`${x}, I am ${y}`;
console.log(res);

// function message(literals, value1, value2) {
// 	console.log(literals); // [ "", ", I am ", "" ]
// 	console.log(value1); // Hi
// 	console.log(value2); // Kevin
// }

function message(literals, ...values) {
	// let result = '';

	// for (let i = 0; i < values.length; i++) {
	// 	result += literals[i];
	// 	result += values[i];
	// }

	// result += literals[literals.length - 1];

    let result = literals.reduce((prev, next, i) => {
	    let value = values[i - 1];
	    return prev + value + next;
	});
    return result;
}