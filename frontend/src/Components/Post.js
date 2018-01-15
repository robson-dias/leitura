import React from 'react'
import {Panel} from 'react-bootstrap'

function Post (props) {
   
    return (
        <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{props.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{props.body}</Panel.Body>
            <Panel.Footer>{props.footer}</Panel.Footer>
        </Panel>
    )
    
}

export default Post