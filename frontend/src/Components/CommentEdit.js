import React, { Component } from 'react'
import { Button, Modal, FormGroup, FormControl, ControlLabel, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import serializeForm from 'form-serialize'

class CommentEdit extends Component {

    state = { 
        show: false
    }

    handleHide = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const values = serializeForm(e.target, { hash: true })
        
        this.props.onEditComment(values)
        
        this.handleHide()
    }

    render() {

        const { comment } = this.props
        
        return (
            <div className="modal-container pull-right" >
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{'Editar'}</Tooltip>}>
                    <Button bsStyle="warning" bsSize="xs" onClick={this.handleShow} style={{marginRight: '5px'}}>
                        <Glyphicon glyph="edit" />
                    </Button>
                </OverlayTrigger>
               
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                Edit Comment
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <FormGroup
                                    controlId="formAuthor"
                                >
                                    <ControlLabel>Author</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="author"
                                        defaultValue={comment.author}
                                    />
                                    <FormControl.Feedback />
                                </FormGroup>

                                <FormGroup
                                    controlId="formBody"
                                >
                                    <ControlLabel>Body</ControlLabel>
                                    <FormControl
                                        componentClass="textarea"
                                        name="body"
                                        defaultValue={comment.body}
                                    />
                                    <FormControl.Feedback />
                                </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <FormControl
                                type="hidden"
                                name="id"
                                defaultValue={comment.id}
                            />
                            <Button type="submit" bsStyle="warning" >Edit</Button>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}


export default CommentEdit