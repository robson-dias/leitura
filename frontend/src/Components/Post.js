import React from 'react'
import {Panel} from 'react-bootstrap'

export default function Post (props) {
   
    return (
        <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{props.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <p>{props.body}</p>
                <hr />
                <div>
                    <small>Category: {props.category}</small>, <small>Author: {props.author}</small>
                </div>
            </Panel.Body>
            <Panel.Footer>{props.footer}</Panel.Footer>
        </Panel>
    )
    
}