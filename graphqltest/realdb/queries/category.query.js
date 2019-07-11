const {
    GraphQLList,
    GraphQLInt
} = require('graphql');

const CategoryType = require('../graphql-models/categoryType');
const categoryFactory = require('../factories/categoryFactory');

module.exports = {
    categories: {
        type: GraphQLList(CategoryType),
        description: 'List of Catgory',
        resolve: async () => {
            const factory = new categoryFactory();
            let res = await factory.getCategories();
            return res;
        }
    }
}