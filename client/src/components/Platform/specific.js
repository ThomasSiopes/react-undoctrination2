import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Container, Button, Row, Col } from "react-bootstrap";

import { QUERY_LINKS } from "../../utils/queries";

const PlatformSpecific = () => {
    const { type } = useParams();
    let {loading, data} = useQuery(QUERY_LINKS);

    if(loading || !data) return <p>Loading...</p>

    console.log("type: " + type);
    console.log("fetched data: " + data);

    let linkList = []
    for(let index of data.genLinks) {
        if(index.type === type) linkList.push(index);
    }

    console.log("final list: " + linkList)
    
    return (
        <Container className="text-center text-white">
            <h3 className="bg-theme rounded py-3 mb-3">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
            <Row>
                <Col xs={1}>
                    <Link to={`/platforms`} className="text-white"><Button variant={"theme"} className="mb-3">Back</Button></Link>
                </Col>
                <Col xs={11}>
                    <hr className="text-black"></hr>
                </Col>
            </Row>
            <Row>
                {linkList.map((index) => (
                    <Col xs={6} md={3} className="mb-2">
                        <Button variant={"theme"} className="btn-block" href={index.link}>{index.text}</Button>
                    </Col>
                ))}
            </Row>
        </Container>    
    )
}

export default PlatformSpecific;