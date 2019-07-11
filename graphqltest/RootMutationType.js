const {
    GraphQLObjectType
} = require('graphql');

const authorm = require('./fakedb/mutations/author.mutation');
const bookm = require('./fakedb/mutations/book.mutation');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        ...authorm,
        ...bookm
    })
});
