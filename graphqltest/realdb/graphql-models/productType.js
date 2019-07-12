const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLNonNull
} = require('graphql');
const CategoryFactory = require('../factories/categoryFactory');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: 'this repensents a product',
    fields: () => {
        const CategoryType = require('../graphql-models/categoryType');
        return {
            id: { type: GraphQLNonNull(GraphQLInt) },
            categoryId: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
            createdDate:{ type: GraphQLNonNull(GraphQLString), resolve:(parent)=>(parent.createdDate.toString()) },
            category: {
                type: CategoryType,
                resolve: async (product)=>{
                    const categoryFactory = new CategoryFactory();
                    let category = await categoryFactory.getCategoryById(product.categoryId);
                    return category;
                }
            }
        }
    }
});

const ProductInputType = new GraphQLInputObjectType({
    name: 'ProductInput',
    description: 'Input product payload',
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLInt),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        categoryId: {
            type: GraphQLNonNull(GraphQLInt),
        }
    }),
});

module.exports = ProductType;
module.exports.ProductInputType = ProductInputType;