const {
    GraphQLString,
    GraphQLNonNull
} = require('graphql');
const AuthorType = require('../AuthorType');
const authors = require('../authors');

module.exports = {
    addAuthor: {
        type: AuthorType,
        description: 'Add an author',
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: (parent, args) => {
            const author = { id: authors.length + 1, name: args.name };
            authors.push(author);
            return author;
        }
    }
}