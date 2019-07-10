const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const authors = require('./authors');

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'this repensents a book',
    fields: () => {
        const AuthorType = require('./AuthorType');
        return {
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
            authorId: { type: GraphQLNonNull(GraphQLInt) },
            author: {
                type: AuthorType,
                resolve: (book) => {
                    return authors.find(author => book.authorId === author.id);
                }
            }
        }
    }
});

module.exports = BookType;