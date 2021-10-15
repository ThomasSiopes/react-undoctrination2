const { AuthenticationError } = require("apollo-server-express");
const { Author, Topic, Quote } = require("../models");

const resolvers = {
    Query: {
        authors: async() => {
            return Author.find().populate('quotes');
        },
        authorID: async (parent, { authorId }) => {
            return Author.findOne({ _id: authorId }).populate('quotes');
        },
        topics: async () => {
            return Topic.find().populate('quotes');
        },
        quotes: async () => {
            return Quote.find();
        }
    }
}

module.exports = resolvers;