import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Navbar, Nav, Row, Col, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', go: false };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value}); 
    }
    
    handleSubmit(event) {
      event.preventDefault();
      this.setState({go: true});
    }

    render() {
        if(this.state.go) {
            this.setState({go: false});
            return <Redirect to={`/search/${this.state.value}`}/>
        }
        else {        
            return(
            <Navbar variant={"dark"} className="mb-3" expand="md">
                <Container>
                    <Nav>
                        <div className="text-center" id="banner">
                            <Row className="align-items-end">
                                <Col xs={12} lg={7}>
                                    <Row className="align-items-end">
                                        <Col xs={10} md={12}><Link to={`/`} title="Home" className="navIcon"><img src="/assets/images/thumbnails/undoctrination.png" alt="Logo"/></Link></Col>
                                        <Col xs={2}><Navbar.Toggle aria-controls="main-navbar" className="mb-3"/></Col>
                                    </Row>
                                </Col>
                                <Col xs={12} lg={5}>
                                    <Navbar.Collapse id="main-navbar">
                                        <Row className="mx-auto container mb-2">
                                            <Col xs={6} className="nav-link px-2"><Link to={`/freethinkers`}><Button variant={"theme"} className="btn-block"><strong>Freethinkers</strong></Button></Link></Col>
                                            <Col xs={6} className="nav-link px-2"><Link to={`/platforms`}><Button variant={"theme"} className="btn-block"><strong>Platforms</strong></Button></Link></Col>
                                            <Col xs={12}>
                                                <Form id="NavSearch" className="" onSubmit={this.handleSubmit}>
                                                    <Row>
                                                        <Col xs={9} md={11}><input type="text" id="searchTerm" placeholder="Search..." className="me-3 my-2 rounded" onChange={this.handleChange}></input></Col>
                                                        <Col xs={1} className="text-white d-none d-md-inline ps-0"><FaSearch className="mt-3" type="submit" onClick={this.handleSubmit}/></Col>
                                                        <Col xs={3} className="d-xs-inline d-md-none ps-0"><input className="mt-2" type="submit" value="Search"/></Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </Navbar.Collapse>
                                </Col>
                            </Row>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            )
        }
    }
}

export default NavBar;