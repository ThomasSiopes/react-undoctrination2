import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useQuery} from "@apollo/client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { QUERY_AUTHOR_ID } from "../utils/queries";

function Author () {
    const { authorId } = useParams();
    let { loading, data } = useQuery(QUERY_AUTHOR_ID, {
        variables: {authorId: authorId },
    });

    if(!authorId || authorId === null || authorId === "undefined") return (<Redirect to={`/authorNavigation`}/>);

    if(loading) {
        return <div className="loadingPage">Loading...</div>;
    }

    if(!data) return (<Redirect to={`/404error`}/>);

    const author = data.authorID;

    console.log(author);

    let picPath = "/assets/images/portraits/" + author.thumbnail + ".png";

    return (        
        <Container className="text-white">
            <Row>
                {/* Author Portrait Section */}
                <Col xs={12} lg={3} className="order-1 order-lg-2 mb-3">
                    <Card bg={"dark"}>
                        <Row className="align-items-center">
                            {author.thumbnail != null &&
                                <Col xs={5} lg={12}>
                                    <img className="card-img" src={picPath}/>
                                </Col>
                            }
                            <Col xs={7} lg={12} className="text-center">
                                <h5 className="card-title mt-2">{author.name}</h5>
                                {author.description != null &&
                                    <p className="card-text">{author.description}</p>
                                }
                            </Col>
                        </Row>
                        {author.links != null &&
                            <Container>
                                <hr className="my-3"/>
                                <Row className="text-center">
                                    {author.links.map((index) => (
                                        <Col xs={4} lg={12} className="mb-2" key={index.type}>
                                            <Button variant={"theme"} className="btn-block" href={index.link}>{index.type}</Button>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        }
                    </Card>
                </Col>

                {/* Quote Section */}
                <Col xs={12} lg={9} className="order-2 order-lg-1">
                    <Row className="text-center">
                        <Col xs={12} className="mb-3 bg-dark">
                            Quotes by {author.name}
                        </Col>
                        {author.quotes.map((index) => (
                            <Col xs={12} className="mb-3" key={index.quoteText}>
                                <Card className="bg-theme">
                                    <Button variant={"theme"}>
                                        <Container>
                                            <Card.Body>
                                                "{index.quoteText}"
                                            </Card.Body>
                                        </Container>
                                    </Button>
                                    <Card.Footer>
                                        {index.topics.map((topic) => (
                                            <Button variant={"theme"} key={index+topic}>{topic}</Button>
                                        ))}
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Author;