import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AuthorCards from "../components/AuthorCards";
import MainPageSearch from "../components/MainpageSearch";

function Main() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={9}><AuthorCards/></Col>
                <Col xs={12} md={3}><MainPageSearch/></Col>
            </Row>            
        </Container>
    )
}

export default Main;
