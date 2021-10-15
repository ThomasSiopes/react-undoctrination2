import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar className="mb-3" expand="sm">
            <Row className="align-items-end">
                <Col xs={12} lg={6}>
                    <Link to={`/`} title="Home" className="navIcon"><img id="banner" src="/assets/images/thumbnails/undoctrination.png" alt="Logo"/></Link>
                </Col>
                <Col xs={12} lg={6} className="text-center">
                    <Nav className="mx-auto row">
                        <Col xs={6} lg={3} className="nav-link"><Link to={`/`}><Button variant={"theme"} className="btn-block"><strong>Freethinkers</strong></Button></Link></Col>
                        <Col xs={6} lg={3} className="nav-link"><Link to={`/`}><Button variant={"theme"} className="btn-block"><strong>Thoughts</strong></Button></Link></Col>
                        <Col xs={6} lg={3} className="nav-link"><Link to={`/`}><Button variant={"theme"} className="btn-block"><strong>Platforms</strong></Button></Link></Col>
                        <Col xs={6} lg={3} className="nav-link"><Link to={`/`}><Button variant={"theme"} className="btn-block"><strong>Resources</strong></Button></Link></Col>
                    </Nav>
                </Col>
            </Row>
        </Navbar>
    )
}

export default NavBar;