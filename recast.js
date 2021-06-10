const recast = require("recast");
 
// Let's turn this function declaration into a variable declaration.
const code = [
  "function add(a, b) {",
  "  return a +",
  "    // Weird formatting, huh?",
  "    b;",
  "}"
].join("\n");
 
// Parse the code using an interface similar to require("esprima").parse.
const ast = recast.parse(code);

console.log(ast);