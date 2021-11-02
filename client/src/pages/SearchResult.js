import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import MetaTags from "react-meta-tags";

import Results from "../components/Results";
import ResultsQuote from "../components/ResultsQuote";

function SearchResults() {
    const { query } = useParams();

    if(!query || query === null || query === "undefined") return (<Redirect to={`/`}/>);
    
    return (
        <Container className="auttopBody">
            <div className="wrapper">
                <MetaTags>
                    <title>Undoctrination</title>
                </MetaTags>
            </div>
            {/* <div className="mb-3"><Link to={`/`}>Home</Link> {`>`} Search {`>`} Showing results for "{query}"</div> */}
            <Container>
                <Results input={query}></Results>
                <ResultsQuote input={query}></ResultsQuote>
            </Container>
        </Container>
    )
}

export default SearchResults;