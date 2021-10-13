const { Schema, model } = require("mongoose");

const socialLinkSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote",
        },
    ],
    color: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: false,
    },
    links: [
        {
            type: socialLinkSchema,
        }
    ]
});

const Author = model("Author", authorSchema);

module.exports = Author;