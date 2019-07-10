const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const books = require('./books');

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'this repensents a Author',
    fields: () => {
        const BookType = require('./BookType');
        return {
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
            books: {
                type: GraphQLList(BookType),
                resolve: (author) => {
                    return books.filter(book => book.authorId === author.id);
                }
            }
        }
    }
});

module.exports = AuthorType;