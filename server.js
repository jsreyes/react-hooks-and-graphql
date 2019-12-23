// Create apollo server
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers.js');

// Use mongoose to conect the cluster
const mongoose = require('mongoose');

require('dotenv').config()

// Method to connect cluster
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true}) // remove deprecation warning when connect from Mongoose
        .then(() => console.log('DB connected!'))
        .catch( err => console.error(err))

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

// Start server
server.listen().then(({ url }) => {
    // Interpolate url variable to see where its running
    console.log(`Server listening on ${url}`)
});