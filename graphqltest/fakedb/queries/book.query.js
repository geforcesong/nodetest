const {
    GraphQLList,
    GraphQLInt
} = require('graphql');

const BookType = require('../BookType');
const books = require('../books');

module.exports = {
    book: {
        /* Query look like this
        {
            book(id:3){
                id
                name
            }
            }
         */
        type: BookType,
        description: 'single book',
        args: {
            id: {
                type: GraphQLInt
            }
        },
        resolve: (parent, args) => books.find(book => book.id === args.id)
    },
    books: {
        type: GraphQLList(BookType),
        description: 'List of Books',
        resolve: () => books
    }
}