const { join } = require('path');
const {
    loadFilesSync,
    mergeTypeDefs,
    mergeResolvers
} = require('graphql-tools');

const allTypes = loadFilesSync(join(__dirname, 'modules', '**', '*.gql'));
const allResolves = loadFilesSync(join(__dirname, 'modules', '**', 'resolvers.js'));

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolves);

module.exports = { typeDefs, resolvers };