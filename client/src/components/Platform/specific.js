import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import MetaTags from "react-meta-tags";

import { Container, Button, Row, Col } from "react-bootstrap";

import { QUERY_LINKS } from "../../utils/queries";

const PlatformSpecific = () => {
    const { type } = useParams();
    let {loading, data} = useQuery(QUERY_LINKS);

    if(loading || !data) return <p>Loading...</p>

    let linkList = []
    for(let index of data.genLinks) {
        if(index.type === type) linkList.push(index);
    }

    if(linkList[0].lastName) {
        linkList = linkList.sort((a, b) => a.lastName.localeCompare(b.lastName));
    }

    let typeName = type.charAt(0).toUpperCase() + type.slice(1);
    
    return (
        <Container className="text-center text-white">
            <MetaTags>
                <title>Undoctrination - Platforms - {typeName}</title>
            </MetaTags>
            <Row className="mb-2">
                <Col xs={2} lg={1} className="mb-2">
                    <Link to={`/platforms`} className="text-white"><Button variant={"theme"} className="btn-block">Back</Button></Link>
                </Col>
                <Col>
                    <h3 className="bg-theme rounded py-3">{typeName}</h3>
                </Col>
                <Col xs={2} lg={1}/>
            </Row>
            <Row>
                {linkList.map((index) => (
                    <Col xs={6} md={3} className="mb-2" key={index.text}>
                        <Button variant={"theme"} className="btn-block" href={index.link}>{index.text}</Button>
                    </Col>
                ))}
            </Row>
        </Container>    
    )
}

export default PlatformSpecific;