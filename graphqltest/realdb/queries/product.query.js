const {
    GraphQLList,
    GraphQLInt
} = require('graphql');

const ProductType = require('../graphql-models/productType');
const ProductFactory = require('../factories/productFactory');

module.exports = {
    products: {
        type: GraphQLList(ProductType),
        description: 'List of Catgory',
        resolve: async () => {
            const factory = new ProductFactory();
            let res = await factory.getProducts();
            return res;
        }
    }
}