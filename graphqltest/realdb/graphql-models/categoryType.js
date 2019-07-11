const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    description: 'this repensents a category',
    fields: () => {
        return {
            id: { type: GraphQLNonNull(GraphQLInt) },
            name: { type: GraphQLNonNull(GraphQLString) },
            createdDate:{ type: GraphQLNonNull(GraphQLString), resolve:(parent)=>(parent.createdDate.toString()) }
        }
    }
});

module.exports = CategoryType;