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
            <Navbar variant={"dark"} className="mb-3 pb-0" expand="md">
                <Container>
                    <Nav>
                        <div className="text-center" id="banner">
                            <Row>
                                <Col xs={12} lg={6}>
                                    <Row>
                                        <Col xs={12} className="px-1"><Link to={`/`} title="Home" className="navIcon"><img src="/assets/images/thumbnails/undoctrinationShort.png" alt="Logo"/></Link></Col>
                                        <Col xs={12} md={4} className="d-xs-block d-md-none mt-2">
                                            <Container>
                                                <Row className="align-items-center">
                                                    <Col className="px-0"><img src="/assets/images/thumbnails/tagline.png" alt="Logo"/></Col>
                                                    <Col xs={3} className="mb-2"><Navbar.Toggle aria-controls="main-navbar"/></Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                        <Col md={12} className="d-none d-md-block my-1"><img src="/assets/images/thumbnails/tagline.png" style={{maxWidth: "50%"}} alt="Logo"/></Col>
                                    </Row>
                                </Col>
                                <Col xs={12} lg={6} className="align-self-end">
                                    <Navbar.Collapse id="main-navbar" className="justify-content-center">
                                        <Container>
                                            <Row className="mb-2">
                                                <Col xs={6} md={4} lg={6} className="nav-link px-2"><Link to={`/freethinkers`}><Button variant={"theme"} className="btn-block"><strong>Freethinkers</strong></Button></Link></Col>
                                                <Col xs={6} md={4} lg={6} className="nav-link px-2"><Link to={`/platforms`}><Button variant={"theme"} className="btn-block"><strong>Platforms</strong></Button></Link></Col>
                                                {/* <Col xs={12} md={4} lg={6} xl={4} className="nav-link px-2"><Link to={`/search`}><Button variant={"theme"} className="btn-block"><strong>Quotes</strong></Button></Link></Col> */}
                                                <Col>
                                                    <Form id="NavSearch" className="d-flex" onSubmit={this.handleSubmit}>
                                                        <Col className="pe-2"><input type="text" id="searchTerm" placeholder="Search..." className="my-2 rounded" onChange={this.handleChange}></input></Col>
                                                        <Col xs={2} lg={1} className="align-self-center text-white d-none d-md-block pb-1"><FaSearch type="submit" onClick={this.handleSubmit}/></Col>
                                                        <Col xs={3} className="align-self-center d-xs-block d-md-none"><input className="btn btn-theme" type="submit" value="Search"/></Col>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </Container>
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