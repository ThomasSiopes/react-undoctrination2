import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button, Form } from "react-bootstrap";

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
            <Navbar className="mb-3" expand="sm">
                <Row className="align-items-end">
                    <Col xs={12} lg={6} className="text-center">
                        <Link to={`/`} title="Home" className="navIcon"><img id="banner" src="/assets/images/thumbnails/undoctrination.png" alt="Logo"/></Link>
                        <Form id="NavSearch" className="mb-2" onSubmit={this.handleSubmit}>
                            <input type="text" id="searchTerm" placeholder="Search..." className="me-2 my-2" onChange={this.handleChange}></input>
                            <input type="submit" value="Submit"/>
                        </Form>
                    </Col>
                    <Col xs={12} lg={6} className="text-center">
                        <Nav>     
                            <Row className="mx-auto container">
                                <Col xs={12} sm={6} className="nav-link"><Link to={`/freethinkers`}><Button variant={"theme"} className="btn-block"><strong>Freethinkers</strong></Button></Link></Col>
                                <Col xs={12} sm={6} className="nav-link"><Link to={`/platforms`}><Button variant={"theme"} className="btn-block"><strong>Platforms</strong></Button></Link></Col>
                            </Row>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
            )
        }
    }
}

export default NavBar;