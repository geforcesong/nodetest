const express = require('express');
const app = express();
const {
    GraphQLSchema
} = require('graphql');
const expressGraphQL = require('express-graphql');
const RootQueryType = require('./graphqltest/RootQueryType');
const RootMutationType = require('./graphqltest/RootMutationType');
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



// const BookType = new GraphQLObjectType({
//     name: 'Book',
//     description: 'this repensents a book',
//     fields: () => ({
//         id: { type: GraphQLNonNull(GraphQLInt) },
//         name: { type: GraphQLNonNull(GraphQLString) },
//         authorId: { type: GraphQLNonNull(GraphQLInt) },
//         author: {
//             type: AuthorType,
//             resolve: (book) => {
//                 return authors.find(author => book.authorId === author.id);
//             }
//         }
//     })
// });

// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     description: 'this repensents a Author',
//     fields: () => ({
//         id: { type: GraphQLNonNull(GraphQLInt) },
//         name: { type: GraphQLNonNull(GraphQLString) },
//         books: {
//             type: GraphQLList(BookType),
//             resolve: (author) => {
//                 return books.filter(book => book.authorId === author.id);
//             }
//         }
//     })
// });

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => { console.log('graphql server is running....') });