import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Row, Col, Card, Button } from "react-bootstrap";

import { QUERY_AUTHOR_ALL } from "../../utils/queries";

const SpecificCard = (author) => {
    let picPath = "/assets/images/portraits/" + author.author.thumbnail + ".png";
    
    return (
        <Col xs={6} md={4} lg={3} className="mb-3">
            <Card className="text-center text-white bg-theme card-main">
                <Card.Img src={picPath}/>
                <Card.Body>
                    <Card.Title>{author.author.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/author/${author.author._id}`}><Button variant={"theme"}>More Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}

const AuthorCards = () => {
    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    if(loading) return <p>Loading...</p>;

    let authorList = [];
    for(let index of data.authors){
        if(index.FT === "n") authorList.push(index)
    }
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