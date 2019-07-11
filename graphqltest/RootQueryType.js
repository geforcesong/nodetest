const {
    GraphQLObjectType
} = require('graphql');
const glob = require('glob');
const path = require('path');

const rootQuery = {};
glob.sync(path.join(__dirname, '/**/queries/*.js')).forEach((file) => {
    Object.assign(rootQuery, require(file));
});

module.exports = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => (rootQuery)
});