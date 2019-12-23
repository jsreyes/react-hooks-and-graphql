// Create apollo server
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers.js');

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

// Start server
server.listen().then(({ url }) => {
    // Interpolate url variable to see where its running
    console.log(`Server listening on ${url}`)
});