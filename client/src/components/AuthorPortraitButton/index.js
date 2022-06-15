import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Card, Button } from "react-bootstrap";

import { QUERY_AUTHOR_NAME } from "../../utils/queries";

const AuthorPortraitButton = ({name}) => {
    let {loading, data} = useQuery(QUERY_AUTHOR_NAME, {
        variables: {name: name},
    })

    if(loading) return <p>Loading...</p>
    
    let author = data.authorName
    let picPath = "/assets/images/portraits/" + author.thumbnail + ".png";

    return (
        <Card bg={""} className="mb-3 author-corner">
            <Card.Header>Author</Card.Header>
            { author.thumbnail &&
                <Card.Img src={picPath}/>
            }
            <Button variant={"weak"}>
                <Link to={`/author/${author._id}`} className="">
                    <Card.Body>
                        <Card.Title>{author.name}</Card.Title>
                    </Card.Body>
                </Link>
            </Button>
        </Card>
    )
}

export default AuthorPortraitButton;