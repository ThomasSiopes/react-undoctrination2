import React from "react";
import { Link, } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

import AuthorCards from "../components/AuthorCards";

function Main() {
    return (
        <Container>
            <Row>
                <Col xs={9}><AuthorCards/></Col>
                <Col xs={3}>White Space???</Col>
            </Row>            
        </Container>
    )
}

export default Main;
