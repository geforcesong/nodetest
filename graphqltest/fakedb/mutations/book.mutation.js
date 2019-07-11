const {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
// const { BookType, AuthorType } = require('./model-types');
const BookType = require('../BookType');
const books = require('../books');

module.exports = {
    addBook: {
        type: BookType,
        description: 'Add a book',
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            authorId: { type: GraphQLNonNull(GraphQLInt) }
        },
        resolve: (parent, args) => {
            const book = { id: books.length + 1, name: args.name, authorId: args.authorId };
            books.push(book);
            return book;
        }
    }
}