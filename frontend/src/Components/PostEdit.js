import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, FormGroup, FormControl, ControlLabel, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import serializeForm from 'form-serialize'

class PostEdit extends Component {

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
        
        this.props.onEditPost(values)
        
        this.handleHide()
    }

    render() {

        const { post, categories, page} = this.props
        
        return (
            <div className="modal-container">
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{'Editar'}</Tooltip>}>
                    <Button bsStyle="warning" bsSize="small" onClick={this.handleShow}>
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
                                Edit Post
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
                                        defaultValue={post.title}
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
                                        defaultValue={post.body}
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
                                        defaultValue={post.author}
                                    />
                                    <FormControl.Feedback />
                                </FormGroup>

                                <FormGroup controlId="formCategory">
                                    <ControlLabel>Category</ControlLabel>
                                    {page ? 
                                        <FormControl componentClass="select" placeholder="" name="category" defaultValue={page}>    
                                            <option defaultValue={page}>{page}</option>
                                        </FormControl> : 
                                        <FormControl componentClass="select" placeholder="" name="category" defaultValue={post.category}>
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
                            <FormControl
                                type="hidden"
                                name="id"
                                defaultValue={post.id}
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

function mapStateToProps({ categories }) {
    return {
        categories: categories
    }
}

export default connect(mapStateToProps)(PostEdit)