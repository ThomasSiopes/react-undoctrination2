import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar className="mb-3" expand="sm">
            <Row className="align-items-end">
                <Col xs={12} lg={7}>
                    <Link to={`/`} title="Home" className="navIcon"><img id="banner" src="/assets/images/thumbnails/undoctrination.png" alt="Logo"/></Link>
                </Col>
                <Col xs={12} lg={5}>
                    <Nav className="mx-auto">
                        <Nav.Link><Button variant={"dark"} className="mx-1">Freethinkers</Button></Nav.Link>
                        <Nav.Link><Button variant={"dark"} className="mx-1">Thoughts</Button></Nav.Link>
                        <Nav.Link><Button variant={"dark"} className="mx-1">Platforms</Button></Nav.Link>
                        <Nav.Link><Button variant={"dark"} className="mx-1">Resources</Button></Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Navbar>
    )
}

export default NavBar;