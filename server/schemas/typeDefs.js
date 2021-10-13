const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        _id: ID
        name: String
        quotes: [Quote]!
        color: String
        thumbnail: String
    }

    type Topic {
        _id: ID
        name: String
        quotes: [Quote]!
    }

    type Quote {
        _id: ID
        quoteText: String
        author: String
        topics: [String]!
    }

    type Query {
        authors: [Author]
        topics: [Topic]
        quotes: [Quote]
    }
`;

module.exports = typeDefs;