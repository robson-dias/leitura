import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, FormControl, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import serializeForm from 'form-serialize'
import { removePost } from '../Actions'

class PostRemove extends Component {

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
        
        this.props.removePost(values)
        
        this.handleHide()
    }

    render() {

        const { post } = this.props
        
        return (
            <div className="modal-container pull-right">
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{'Remover'}</Tooltip>}>
                    <Button bsStyle="danger" bsSize="small" onClick={this.handleShow}>
                        <Glyphicon glyph="remove" />
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
                                Remove Post
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Você tem certeza que deseja remover o post <b>{post.title}</b>?
                        </Modal.Body>
                        <Modal.Footer>
                            <FormControl
                                type="hidden"
                                name="id"
                                defaultValue={post.id}
                            />
                            <Button type="submit" bsStyle="danger" >YES</Button>
                            <Button onClick={this.handleHide}>Close</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removePost: (data) => dispatch(removePost(data)),
    }
}


export default connect(null, mapDispatchToProps)(PostRemove)