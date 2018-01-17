import React, { Component } from 'react'
import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import serializeForm from 'form-serialize'
import { ulid } from 'ulid'

class PostCreate extends Component {

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
        
        this.props.onCreatePost({ 
            ...values, 
            id: ulid(), 
            timestamp: Date.now()
        })
        
        this.handleHide();
    }

    render() {
        return (
            <div className="modal-container">
                <Button
                    bsStyle="primary"
                    onClick={this.handleShow}
                >
                    New Post
				</Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                                New Post
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <FormGroup
                                    controlId="formTitle"
                                >
                                    <ControlLabel>Title</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="title"
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
                                    />
                                    <FormControl.Feedback />
                                </FormGroup>

                                <FormGroup
                                    controlId="formAuthor"
                                >
                                    <ControlLabel>Author</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="author"
                                    />
                                    <FormControl.Feedback />
                                </FormGroup>

                                <FormGroup controlId="formCategory">
                                    <ControlLabel>Category</ControlLabel>
                                    <FormControl componentClass="select" placeholder="" name="category">
                                        <option value="">Select</option>    
                                        <option value="react">React</option>
                                        <option value="redux">Redux</option>
                                        <option value="udacity">Udacity</option>
                                    </FormControl>
                                </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" bsStyle="success" >Save</Button>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default PostCreate