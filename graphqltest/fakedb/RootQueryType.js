const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
} = require('graphql');
// const { BookType, AuthorType } = require('./model-types');
const AuthorType= require('./AuthorType');
const BookType = require('./BookType');
const authors = require('./authors')
const books = require('./books');

module.exports = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
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
        },
        author: {
            type: AuthorType,
            description: 'single author',
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (parent, args) => {
                console.log(args);
                return authors.find(author => author.id === args.id);
            }
        },
        authors: {
            type: GraphQLList(AuthorType),
            description: 'List of Authors',
            resolve: () => authors
        }
    })
});