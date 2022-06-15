import React from "react";
import { useQuery } from "@apollo/client";
import { Container, Row, Col, Card } from "react-bootstrap";
import MetaTags from "react-meta-tags";

import AuthorButton from "../components/AuthorButton";

import { QUERY_QUOTE_ALL } from "../utils/queries";

const QuoteCard = ({quote}) => {
    return (
        <Card>
            <Card.Body className="rounded quote-page">
                <Container>
                    <Card.Text><span className="quote-body">"{quote.quoteText}"</span></Card.Text>
                    <Card.Text className="d-xs-block d-lg-none"><strong><AuthorButton type={"link"} name={quote.author}/></strong></Card.Text>
                </Container>
            </Card.Body>
        </Card>
    )
}

function Search() {
    let { loading, data } = useQuery(QUERY_QUOTE_ALL);

    if(loading) return <span>Loading...</span>

    const quoteList = data.quotes;

    return (
        <Container className="auttopBody">
            <div className="wrapper">
                <MetaTags>
                    <title>Undoctrination</title>
                </MetaTags>
            </div>
            <Container>
                <Row>
                    <Col xs={12} xl={2}>
                        <Card className="text-center">
                            <Card.Body>
                                <input type="text"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} xl={10}>
                        <Row>
                            {quoteList.map((index) => (
                                <Col xs={4} className="mb-3" key={index.quoteText}>
                                    <QuoteCard quote={index}/>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Search;