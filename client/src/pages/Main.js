import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MetaTags from "react-meta-tags";

import AuthorCards from "../components/AuthorCards";
import MainPageSearch from "../components/MainpageSearch";

function Main() {
    return (
        <Container>
            <MetaTags>
                <title>Undoctrination</title>
            </MetaTags>
            <Row>
                <Col xs={12} lg={9}><AuthorCards/></Col>
                <Col lg={3} className="d-none d-lg-block"><MainPageSearch/></Col>
            </Row>            
        </Container>
    )
}

export default Main;
