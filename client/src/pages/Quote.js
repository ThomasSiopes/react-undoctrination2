import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import TopicButton from "../components/TopicButton";
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
            </MetaTags>
            <Card className="mb-3">
                <Card.Body>
                    <Container>
                        <Card.Text className="display-6 container"><span className="quote-body" id="main-quote">"{quote.quoteText}"</span></Card.Text>
                        {/* <Card.Text><Link id="author-attribution">{quote.author}</Link></Card.Text> */}
                    </Container>
                </Card.Body>
                <Card.Footer className="bg-theme text-white">
                    <Row>
                        <Col/>
                        <Col xs={12} md={4} lg={3}>
                            <p className="mt-2">Share: 
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}><Button className="mx-1" variant={"theme"}><FaFacebookF/></Button></a>
                                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`}><Button className="mx-1" variant={"theme"}><FaTwitter/></Button></a>
                            </p>
                        </Col>
                        <Col/>
                    </Row>
                </Card.Footer>
            </Card>
            <Row className="text-center text-white">
                <Col xs={12} md={6} lg={4}>
                    <AuthorPortraitButton name={quote.author}/>
                </Col>
                <Col xs={12} md={6} lg={8}>
                    <MoreQuotesBy quote={quote}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Quote;