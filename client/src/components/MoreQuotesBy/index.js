import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Button } from "react-bootstrap";

import { QUERY_QUOTE_ALL } from "../../utils/queries";

function compareQuotes(quote1, quote2) {
    let words1 = quote1.quoteText.split(/\s+/g);
    let words2 = quote2.quoteText.split(/\s+/g);
    let forbiddenWords = ["A", "About", "Above", "actual", "All", "almost", "always", "an", "and", "any", "anyone", "anything", "are", "around", "as", "ask", "at", "be", "being", "because", "been", "best", "better", "between", "bring", "but", "buy", "by", "call", "can", "can’t", "cannot", "continue", "could", "didn’t", "do", "does", "doesn’t", "done", "down", "else", "end", "enough", "even", "every", "exist", "follow", "for", "from", "further", "get", "give", "given", "gives", "go", "goes", "going", "had", "has", "have", "having", "her", "her", "how", "however", "huge", "I", "If", "In", "into", "It", "its", "is", "Just", "Know", "less", "Let", "Like", "Long", "made", "main", "make", "many", "maybe", "Me", "Might", "More", "must", "my", "need", "needs", "never", "next", "no", "Not", "nothing", "now", "Of", "off", "on", "once", "One", "Only", "onto", "Or", "other", "Our", "Out", "Over", "own", "people", "Please", "Put", "real", "really", "Same", "say", "see", "should", "So", "Some", "Speak", "Such", "Take", "taken", "talk", "Tell", "than", "that", "the", "their", "them", "there", "these", "they", "think", "this", "those", "though", "this", "through", "to", "too", "try", "trying", "under", "unless", "up", "us", "use", "used", "using", "want", "was", "way", "we", "were", "what", "when", "where", "who", "whom", "why", "will", "with", "won’t", "worse", "worst", "would", "yet", "you", "your"];
    forbiddenWords = forbiddenWords.join('|').toLowerCase().split('|');

    let sharedWords = [];

    for(let index1 of words1) {
        if(!(sharedWords.includes(index1.toLowerCase()))) {
            if(!(forbiddenWords.includes(index1.toLowerCase()))) {
                for(let index2 of words2) {
                    if(!(forbiddenWords.includes(index2.toLowerCase()))) {
                        if(index1.toLowerCase() === index2.toLowerCase()) {
                            // console.log("Shared Word: " + index1);
                            if(!(sharedWords.includes(index2.toLowerCase()))) sharedWords.push(index2.toLowerCase());
                        }
                    }
                }
            }
        }
    }

    for(let index3 = 0; index3 < sharedWords.length; ++index3) {
        // console.log("Testing for " + sharedWords[index3])
        if(forbiddenWords.includes(sharedWords[index3]) || forbiddenWords.includes(sharedWords[index3].toLowerCase())) {
            sharedWords.splice(index3, 1);
        }
    }

    if(sharedWords.length >= 1) {
        // console.log("Shared Words:");
        // console.log(sharedWords);
    }

    return sharedWords.length;
}

function randomize(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {
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