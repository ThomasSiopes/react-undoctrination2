import { gql } from "@apollo/client";

export const QUERY_AUTHOR_ALL = gql`
    query getAllAuthors {
        authors {
            _id
            name
            FT
            quotes {
                _id
                quoteText
                author
                topics
            }
            lastName
            color
            darkColor
            lightColor
            thumbnail
            links {
                type
                link
            }
            description
            order
        }
    }
`;

export const QUERY_AUTHOR_NAME = gql`
    query getAuthorByName($name: String!) {
        authorName (name: $name){
            _id
            name
            FT
            quotes {
                _id
                quoteText
                author
                topics
            }
            lastName
            color
            darkColor
            lightColor
            thumbnail
            links {
                type
                link
            }
            description
            order
        }
    }
`;

export const QUERY_AUTHOR_ID = gql`
    query getAuthorById($authorId: ID!) {
        authorID (authorId: $authorId){
            _id
            name
            FT
            quotes {
                _id
                quoteText
                author
                topics
            }
            lastName
            color
            darkColor
            lightColor
            thumbnail
            links {
                type
                link
            }
            description
            order
        }
    }
`;

export const QUERY_TOPIC_ALL = gql`
    query getAllTopics {
        topics {
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
        }
    }
`;

export const QUERY_TOPIC_NAME = gql`
    query topicName($name: String!) {
        topicName(name: $name) {
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
        }
    }
`;

export const QUERY_TOPIC_ID = gql`
    query topicId($topicId: ID!) {
        topicID(topicId: $topicId) {
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
        }
    }
`;

export const QUERY_QUOTE_ALL = gql`
    query getAllQuotes {
        quotes {
            _id
            quoteText
            author
            topics
        }
    }
`;

export const QUERY_QUOTE_ID = gql`
    query getQuote($quoteId: ID!) {
        quote(quoteId: $quoteId) {
            _id
            quoteText
            author
            topics
        }
    }
`;

export const QUERY_LINKS = gql`
    query getAllLinks {
        genLinks {
            type
            text
            link
            lastName
        }
    }
`;