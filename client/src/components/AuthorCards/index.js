import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Row, Col, Card, Button } from "react-bootstrap";

import { QUERY_AUTHOR_ALL } from "../../utils/queries";

const SpecificCard = (author) => {
    let picPath = "/assets/images/portraits/" + author.author.thumbnail + ".png";
    
    return (
        <Col xs={4}>
            <Card className="text-center">
                <Card.Img src={picPath}/>
                <Card.Body>
                    <Card.Title>{author.author.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button variant={"danger"} href="#">More Details</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

const AuthorCards = () => {
    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    if(loading) return <p>Loading...</p>;

    const authorList = data.authors;
    console.log(authorList);

    return (
        <Row>
            {authorList.map((index) => (
                <SpecificCard author={index} key={index.name}/>
            ))}
        </Row>
    )
}

export default AuthorCards;