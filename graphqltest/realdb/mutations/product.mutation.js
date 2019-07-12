const {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
// const { BookType, AuthorType } = require('./model-types');
const ProductType = require('../graphql-models/productType');
const ProductInputType = require('../graphql-models/productType').ProductInputType;
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
    },
    deleteProduct: {
        type: GraphQLInt,
        description: 'Delete a product',
        args: {
            id: { type: GraphQLNonNull(GraphQLInt) }
        },
        resolve: async (parent, args) => {
            const factory = new ProductFactory()
            const id = await factory.deleteProduct(args.id);
            return id;
        }
    },
    updateProduct:{
        type: ProductType,
        description: 'Add a book',
        args: {
            product: { type: ProductInputType }
        },
        resolve: async (parent, args) => {
            const factory = new ProductFactory()
            const product = await factory.updateProduct(args.product);
            return product;
        }
    }
}