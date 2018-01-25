import React, { Component } from 'react'
import { getCommentsAPI } from '../Util/api'
import { ListGroup, ListGroupItem, FormGroup, FormControl } from 'react-bootstrap'

class Comments extends Component {


    componentDidMount() {

        getCommentsAPI(this.props.post).then((comments) => {
            console.log(comments)
        })

    }

    render () {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>Ver mais comentários&hellip;</ListGroupItem>
                </ListGroup>
                <FormGroup controlId="formComentario">
                    <FormControl
                        type="text"
                        name="comentario"
                        placeholder="Escreva um comentário..."
                    />
                </FormGroup>
            </div>

        )
    }
}

export default Comments