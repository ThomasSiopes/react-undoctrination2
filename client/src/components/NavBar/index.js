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
            <Navbar className="mb-3">
                <Container>
                    <Nav>
                        <div className="text-center mx-4" id="banner">
                            <Container>
                                <Link to={`/`} title="Home" className="navIcon"><img src="/assets/images/thumbnails/undoctrination.png" alt="Logo"/></Link>
                            </Container>
                            <div>
                                <Row className="mx-auto container">
                                    <Col xs={12} sm={6} lg={2} className="nav-link"><Link to={`/freethinkers`}><Button variant={"theme"} className="btn-block"><strong>Freethinkers</strong></Button></Link></Col>
                                    <Col xs={12} sm={6} lg={2} className="nav-link"><Link to={`/platforms`}><Button variant={"theme"} className="btn-block"><strong>Platforms</strong></Button></Link></Col>
                                    <Col xs={12} lg={8}>
                                        <Form id="NavSearch" className="mb-2" onSubmit={this.handleSubmit}>
                                            <input type="text" id="searchTerm" placeholder="Search..." className="me-3 my-2 rounded" onChange={this.handleChange}></input>
                                            <FaSearch className="text-white" type="submit" onClick={this.handleSubmit}/>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            )
        }
    }
}

export default NavBar;