import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaShareSquare } from "react-icons/fa";

// import TopicButton from "../components/TopicButton";
import AuthorButton from "../components/AuthorButton";
import AuthorPortraitButton from "../components/AuthorPortraitButton";
import MoreQuotesBy from "../components/MoreQuotesBy";

import { QUERY_QUOTE_ID } from "../utils/queries";

function Quote () {
    const { quoteId } = useParams();
    let { loading, data } = useQuery(QUERY_QUOTE_ID, {
        variables: {quoteId: quoteId},
    })

    if(!quoteId || quoteId === null || quoteId === "undefined") return (<Redirect to={`/`}/>);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    const quote = data.quote;

    return (
        <Container>
            <MetaTags>
                <title>Undoctrination - {quote.author} - {quote.quoteText}</title>
                <meta property="og:description" content={quote.quoteText}/>
            </MetaTags>
            <Row>
                <Col xs={12} lg={9}>
                    <Card className="mb-3 rounded">
                        <Card.Body className="py-4 rounded quote-page">
                            <Container>
                                <Card.Text className="display-6"><span className="quote-body" id="main-quote">"{quote.quoteText}"</span></Card.Text>
                                <Card.Text className="d-xs-block d-lg-none"><strong><AuthorButton type={"link"} name={quote.author}/></strong></Card.Text>
                            </Container>
                        </Card.Body>
                        <Card.Footer className="text-center pb-3">
                            <a className="mx-3 share-button" href={`https://twitter.com/intent/tweet?url=${window.location.href}`} id="share-twitter"><FaTwitter/></a>
                            <a className="mx-3 share-button" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} id="share-facebook"><FaFacebookF/></a>
                            {navigator.share && 
                                <button className="mobile-share border-0 p-0 mx-3" onClick={function(){
                                    navigator.share({
                                        title: "Undoctrination",
                                        text: quote.quoteText,
                                        url: window.location.href
                                    })
                                }}><FaShareSquare className="mb-1"/></button>
                            }
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} className="text-center d-none d-lg-block">
                    <AuthorPortraitButton name={quote.author}/>
                </Col>
                <Col xs={12} className="text-center">
                    <MoreQuotesBy quote={quote}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Quote;