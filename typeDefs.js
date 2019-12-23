const { gql } = require('apollo-server')

// Export strctures that I'm going to use
module.exports = gql`
    type User {
        _id: ID
        name: String
        email: String
        picture: String
    }

    type Query {
        me: User
    }
`
