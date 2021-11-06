import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Row, Col, Card } from "react-bootstrap";

import { QUERY_AUTHOR_ALL } from "../../utils/queries";

const SpecificCard = (author) => {
    let picPath = "/assets/images/portraits/" + author.author.thumbnail + ".png";
    
    return (
        <Col xs={6} md={4} lg={3} className="mb-3">
            <Card className="text-center text-white bg-theme card-main">
                <Link to={`/author/${author.author._id}`}><Card.Img src={picPath}/></Link>
                <Link to={`/author/${author.author._id}`} className="text-white btn btn-theme btn-block py-3">
                    <strong>{author.author.name}</strong>
                </Link>
            </Card>
        </Col>
    )
}

const AuthorCards = () => {
    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    if(loading) return <p>Loading...</p>;

    let authorList = [];
    for(let index of data.authors){
        if(index.FT !== "y") authorList.push(index)
    }
    // console.log(authorList);

    authorList = authorList.sort((a, b) => (b.quotes.length) - (a.quotes.length));

    return (
        <Row>
            {authorList.map((index) => (
                <SpecificCard author={index} key={index.name}/>
            ))}
        </Row>
    )
}

export default AuthorCards;