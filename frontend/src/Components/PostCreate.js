import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, FormGroup, FormControl, ControlLabel, Glyphicon } from 'react-bootstrap'
import serializeForm from 'form-serialize'
import { ulid } from 'ulid'
import { createPost } from '../Actions'

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
        
        this.props.createPost({ 
            ...values, 
            id: ulid(), 
            timestamp: Date.now()
        })
        
        this.handleHide();
    }

    render() {

        const { categories, page} = this.props
        
        return (
            <div className="modal-container">
                <Button
                    bsStyle="primary"
                    onClick={this.handleShow}
                >
                    <Glyphicon glyph="plus" /> New Post
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
                                    {page ? 
                                        <FormControl componentClass="select" placeholder="" name="category" defaultValue={page}>    
                                            <option value={page}>{page}</option>
                                        </FormControl> : 
                                        <FormControl componentClass="select" placeholder="" name="category" defaultValue={page}>
                                                <option value="">Select</option>    
                                                {categories.length > 0 ? categories.map((category) => 
                                                    <option 
                                                        key={category.path} 
                                                        value={category.path}>
                                                        {category.name}
                                                    </option>
                                                ) : ''}
                                        </FormControl>
                                    }
                                    
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

function mapStateToProps({ categories }) {
    return {
        categories: categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createPost: (data) => dispatch(createPost(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCreate)