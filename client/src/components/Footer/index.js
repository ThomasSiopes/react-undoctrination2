import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const FooterPage = () => {
    return (
        <Card id="footer-supreme" className="bg-theme text-center text-white mt-4 py-4">
            <Container>
                <Row>
                    <Col xs={12} md={4} className="d-flex font-Lato">
                        <Container className="align-self-center">
                            <Link to={`/`} className="navbar-brand text-white footer-img"><img src="/assets/images/thumbnails/undoctrination_small.png" alt="Footer Icon"/></Link>
                        </Container>
                    </Col>
                    <Col xs={12} md={4} className="align-self-center mb-3">
                        <span>Website Description. Maybe about us section? Copyright info? Anything relevant in text form.</span>
                    </Col>
                    <Col xs={12} md={4}>
                        Site
                        <hr></hr>
                        <i>
                            <p><Link className="text-white" to={`/`}>Authors</Link></p>
                            <p><Link className="text-white" to={`/freethinkers`}>Freethinkers</Link></p>
                            {/* <p><Link className="text-white" to={`/thoughts`}>Thoughts</Link></p> */}
                        </i>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default FooterPage;
