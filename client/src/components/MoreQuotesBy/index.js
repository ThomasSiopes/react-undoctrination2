import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Button } from "react-bootstrap";

import { QUERY_QUOTE_ALL } from "../../utils/queries";

function compareQuotes(quote1, quote2) {
    let words1 = quote1.quoteText.split(/\s+/g);
    let words2 = quote2.quoteText.split(/\s+/g);
    let forbiddenWords = ["a", "and", "as", "get", "like", "of", "people", "to", "the", "they", "them", "when"];

    let sharedWords = []

    for(let index1 of words1) {
        for(let index2 of words2) {
            if((index1.toLowerCase() === index2.toLowerCase()) && !(forbiddenWords.includes(index2.toLowerCase()) && !(sharedWords.includes(index2.toLowerCase())))) {
                sharedWords.push(index2.toLowerCase());
            }
        }
    }

    if(sharedWords.length >= 3) {
        console.log("Shared Words:");
        console.log(sharedWords);
    }

    return sharedWords.length;
}

const MoreQuotesBy = ({quote}) => {
    let {loading, data} = useQuery(QUERY_QUOTE_ALL);

    if(loading) return <span>Loading...</span>

    let similarQuotes = [];
    let sharedWordsLength;
    let currentQuote;
    let quotePile = data.quotes;

    for(let i = 0; (i < quotePile.length) && (similarQuotes.length < 4); ++i) {
        // currentQuote = quotePile[Math.floor(Math.random() * (quotePile.length-1))];
        // topicCheck = currentQuote.topics.filter(element => quote.topics.includes(element));
        // if((topicCheck !== "") && (currentQuote.quoteText !== quote.quoteText) && !(similarQuotes.includes(currentQuote))) similarQuotes.push(currentQuote);
        currentQuote = quotePile[i];

        if(currentQuote !== quote) {
            sharedWordsLength = compareQuotes(quote, currentQuote);

            if((sharedWordsLength >= 3) && !(similarQuotes.includes(currentQuote))) {
                similarQuotes.push(currentQuote);
            }
        }
    }

    if(similarQuotes.length <= 0) return null;

    return (
        <Card bg={"theme"}>
            <Card.Header>Similar Quotes</Card.Header>
            <Card.Body>
                {similarQuotes.map((index) => (
                    <Link to={`/quote/${index._id}`} key={index.quoteText}><Button variant={"theme"} className="mb-3"><i>"{index.quoteText}"</i> - {index.author}</Button></Link>
                ))}
            </Card.Body>
        </Card>
    )
}

export default MoreQuotesBy;