const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Author {
        _id: ID
        name: String
        FT: String
        quotes: [Quote]!
        lastName: String
        color: String
        darkColor: String
        lightColor: String
        thumbnail: String
        links: [Link]!
        order: Int
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

    type GenLink {
        type: String
        text: String
        link: String
        lastName: String
    }

    type Query {
        authors: [Author]
        authorName(name: String): Author
        authorID(authorId: ID): Author
        topics: [Topic]
        topicName(name: String): Topic
        topicID(topicId: ID): Topic
        quotes: [Quote]
        quote(quoteId: ID): Quote
        genLinks: [GenLink]
    }
`;

module.exports = typeDefs;