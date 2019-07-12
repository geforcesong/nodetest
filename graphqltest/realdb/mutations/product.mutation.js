const {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
// const { BookType, AuthorType } = require('./model-types');
const ProductType = require('../graphql-models/productType');
const ProductFactory = require('../factories/productFactory');

module.exports = {
    addProduct: {
        type: ProductType,
        description: 'Add a book',
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            categoryId: { type: GraphQLNonNull(GraphQLInt) }
        },
        resolve: async (parent, args) => {
            const factory = new ProductFactory()
            const product = await factory.addProduct(args.name, args.categoryId);
            return product;
        }
    }
}