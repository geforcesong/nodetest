const {
    GraphQLObjectType
} = require('graphql');

const authq = require('./fakedb/queries/author.query');
const bookq = require('./fakedb/queries/book.query');

module.exports = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        ...authq,
        ...bookq
    })
});