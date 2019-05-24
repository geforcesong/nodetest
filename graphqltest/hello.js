var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
    hi: String
  }
`);

var root = { 
    hello: () => 'Hello world!',
    hi: () => 'Hi world!' 
};

graphql(schema, '{ hi, hello }', root).then((response) => {
  console.log(response);
});