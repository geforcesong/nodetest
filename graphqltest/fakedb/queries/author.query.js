const {
    GraphQLList,
    GraphQLInt,
} = require('graphql');

const AuthorType= require('../AuthorType');
const authors = require('../authors')

module.exports = {
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
}