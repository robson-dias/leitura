import React from 'react'
import {Panel} from 'react-bootstrap'

function Post (props) {
   
    return (
        <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{props.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <p>{props.body}</p>
                <div>
                    <small>Author: {props.author}</small><br />
                    <small>Category: {props.category}</small>
                </div>
            </Panel.Body>
            <Panel.Footer>{props.footer}</Panel.Footer>
        </Panel>
    )
    
}

export default Post