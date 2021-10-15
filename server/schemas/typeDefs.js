const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        _id: ID
        name: String
        quotes: [Quote]!
        color: String
        darkColor: String
        lightColor: String
        thumbnail: String
        links: [Link]!
        description: String
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

    type Link {
        type: String
        link: String
    }

    type Query {
        authors: [Author]
        authorID(authorId: ID): Author
        topics: [Topic]
        quotes: [Quote]
    }
`;

module.exports = typeDefs;