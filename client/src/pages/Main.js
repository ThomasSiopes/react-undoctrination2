import React from "react";
import { Link, } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/index.css";

import { useQuery } from "@apollo/client";

import { QUERY_AUTHOR_ALL } from "../utils/queries";

function Main() {
    let {loading, data} = useQuery(QUERY_AUTHOR_ALL);
    if(loading) return <p>loading...</p>

    const authors = data;
    console.log(authors);

    return (
        <Container>
            empty
        </Container>
    )
}

export default Main;
