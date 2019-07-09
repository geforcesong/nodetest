const express = require('express');
const app = express();
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const expressGraphQL = require('express-graphql');

// const helloworldSchema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'HelloWorld',
//         fields: () => ({
//             message: {
//                 type: GraphQLString,
//                 resolve: () => 'Hello world!!!'
//             }
//         })
//     })
// });

const authors = [
    { id: 1, name: 'Geroge' },
    { id: 2, name: 'Jenny' },
    { id: 3, name: 'Andy' },
    { id: 4, name: 'Andy' }
]

const books = [
    { id: 1, name: 'what is apple to apple', authorId: 1 },
    { id: 2, name: 'Color design guideline', authorId: 2 },
    { id: 3, name: 'Don\'t talk', authorId: 1 },
    { id: 4, name: 'Tell me that', authorId: 3 },
    { id: 5, name: 'i love you', authorId: 1 },
    { id: 6, name: 'what is visual studio', authorId: 2 },
    { id: 7, name: 'why using vs code', authorId: 2 },
    { id: 8, name: 'I like windows and node.js', authorId: 2 },
    { id: 9, name: 'I love apple', authorId: 1 },
    { id: 10, name: 'C# keys', authorId: 1 },
    { id: 11, name: 'Learn node.js', authorId: 3 },
    { id: 12, name: 'why use mac', authorId: 3 },
    { id: 13, name: 'Heal the world', authorId: 4 },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'this repensents a book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => book.authorId === author.id);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'this repensents a Author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorId === author.id);
            }
        }
    })
});


const RootQueryType = new GraphQLObjectType({
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

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
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
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add an author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const author = { id: authors.length + 1, name: args.name};
                authors.push(author);
                return author;
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => { console.log('graphql server is running....') });