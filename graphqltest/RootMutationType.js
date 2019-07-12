const {
    GraphQLObjectType
} = require('graphql');

const glob = require('glob');
const path = require('path');

const rootMutation = {};
glob.sync(path.join(__dirname, '/**/mutations/*.mutation.js')).forEach((file) => {
    Object.assign(rootMutation, require(file));
});

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => (rootMutation)
});
