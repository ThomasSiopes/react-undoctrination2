import { gql } from "@apollo/client";

export const QUERY_AUTHOR_ALL = gql`
    query getAllAuthors {
        authors {
            _id
            name
            quotes {
                _id
                quoteText
                author
                topics
            }
            color
            thumbnail
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