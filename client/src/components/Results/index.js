import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Card, Col, Row } from "react-bootstrap";

import { QUERY_AUTHOR_ALL } from '../../utils/queries';

const Results = ({input}) => {
    let authList, newList = [];

    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    authList = data;

    input = input.toUpperCase();

    if(loading || !authList) return <p>Loading...</p>

    for(let index of authList.authors) {
        if(index.name.toUpperCase().indexOf(input) > -1) newList.push(index);
    }

    if(newList[0]) {
        return (
            <Container className="mb-2">
                <div>
                    <h5>Results under authors and freethinkers . . .</h5>
                    <hr></hr>
                    <Row className="text-center">
                        {newList.map((index) => (
                            <Col xs={12} sm={6} md={4} lg={3} className="mb-2" key={index.name}>
                                <Link to={`/author/${index._id}`} className="">{index.name}</Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        )
    }
    
    return (
        <Container>
            <h5>No results under authors...</h5>
            <hr></hr>
        </Container>
    )
}

export default Results;
