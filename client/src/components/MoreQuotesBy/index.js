import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Button } from "react-bootstrap";

import { QUERY_QUOTE_ALL } from "../../utils/queries";

function compareQuotes(quote1, quote2) {
    let words1 = quote1.quoteText.split(/\s+/g);
    let words2 = quote2.quoteText.split(/\s+/g);
    let forbiddenWords = ["a", "an", "am", "and", "as", "are", "been", "do", "for", "get", "have", "is", "i", "in", "into", "it", "it's", "its", "know", "like", "of", "out", "people", "to", "that", "the", "there", "they", "them", "this", "want", "when", "where", "making", "most", "keep", "on", "so", "my", "about", "how", "be", "yet", "why", "me", "myself", "were"];

    let sharedWords = [];

    for(let index1 of words1) {
        if(!(sharedWords.includes(index1.toLowerCase()))) {
            for(let index2 of words2) {
                if(!(forbiddenWords.includes(index2.toLowerCase()))) {
                    if(index1.toLowerCase() === index2.toLowerCase()) {
                        console.log("Shared Word: " + index1);
                        if(!(sharedWords.includes(index2.toLowerCase()))) sharedWords.push(index2.toLowerCase());
                    }
                }
            }
        }
    }

    if(sharedWords.length >= 1) {
        console.log("Shared Words:");
        console.log(sharedWords);
    }

    return sharedWords.length;
}

function randomize(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
}

const MoreQuotesBy = ({quote}) => {
    let {loading, data} = useQuery(QUERY_QUOTE_ALL);

    if(loading) return <span>Loading...</span>

    let similarQuotes = [];
    let sharedWordsLength;
    let currentQuote;
    let quotePile = [...data.quotes];
    quotePile = randomize(quotePile);

    for(let i = 0; (i < quotePile.length) && (similarQuotes.length < 4); ++i) {
        // currentQuote = quotePile[Math.floor(Math.random() * (quotePile.length-1))];
        // topicCheck = currentQuote.topics.filter(element => quote.topics.includes(element));
        // if((topicCheck !== "") && (currentQuote.quoteText !== quote.quoteText) && !(similarQuotes.includes(currentQuote))) similarQuotes.push(currentQuote);
        console.log(similarQuotes.length);
        currentQuote = quotePile[i];

        if((currentQuote !== quote) && (currentQuote.author !== quote.author)) {
            sharedWordsLength = compareQuotes(quote, currentQuote);

            if((sharedWordsLength >= 1) && !(similarQuotes.includes(currentQuote))) {
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
                    <Link to={`/quote/${index._id}`} key={index.quoteText}>
                        <Button variant={"theme"} className="mb-3 py-2 btn-block"><i>"{index.quoteText}"</i> - {index.author}</Button>
                    </Link>
                ))}
            </Card.Body>
        </Card>
    )
}

export default MoreQuotesBy;