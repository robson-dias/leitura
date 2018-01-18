import React from 'react'
import {Panel} from 'react-bootstrap'

export default function Post (props) {
   
    const { post } = props

    return (
        <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{post.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <p>{post.body}</p>
                <hr />
                <div>
                    <small>Category: {post.category}</small>, <small>Author: {post.author}</small>
                </div>
            </Panel.Body>
            <Panel.Footer>Vote Score: {post.voteScore}</Panel.Footer>
        </Panel>
    )
    
}