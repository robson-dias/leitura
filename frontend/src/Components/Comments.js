import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editCommentAPI, voteCommentAPI } from '../Util/api'
import { ListGroup, ListGroupItem, Form, FormGroup, FormControl, Button, Col, Glyphicon } from 'react-bootstrap'
import sortBy from 'sort-by'
import { ulid } from 'ulid'
import serializeForm from 'form-serialize'
import CommentRemove from './CommentRemove'
import CommentEdit from './CommentEdit'
import VoteScore from './VoteScore'
import { createComment, removeComment } from '../Actions'

class Comments extends Component {

    state = {
        show: false
    }

    handleHideShow = () => {
        this.setState(function (state) {
            return {
                show: state.show ? false : true
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const values = serializeForm(e.target, { hash: true })

        const { post, createComment } = this.props

        createComment(post, {
            ...values,
            id: ulid(),
            timestamp: Date.now(),
            parentId: post.id
        })

        this.setState({ show: true })

    }

    removeComment= (comment) => {
        const { post, removeComment } = this.props
        removeComment(post, comment)
    }

    editComment = (comment) => {
        editCommentAPI(comment).then(comment => {
            const { comments } = this.state
            this.setState({ comments: comments.map((stateComment) => stateComment.id === comment.id ? comment : stateComment) })
        })
    }

    vote = (id, vote) => {
        voteCommentAPI(id, vote).then((comment) => {
            const { comments } = this.state
            this.setState({ comments: comments.map((stateComment) => stateComment.id === comment.id ? comment : stateComment) })
        })
    }

    render () {

        const { comments } = this.props

        if (comments.length > 0)
            comments.sort(sortBy('-voteScore'))

        return (
            <div>
                <ListGroup>
                    <ListGroupItem>
                        {comments.length > 0 ?
                            <Button bsSize="xs" onClick={this.handleHideShow}>
                                {`${comments.length} comentário${comments.length > 1 ? 's' : ''}`}
                                {' '}<Glyphicon glyph={this.state.show ? 'menu-up' : 'menu-down'} />
                            </Button>
                        : <small>Nennhum comentário</small>}
                    </ListGroupItem>
                    <div style={{ display: this.state.show ? 'block' : 'none'}}>
                        {comments.length > 0 ? comments.map(comment => 
                        <ListGroupItem key={comment.id}>
                            <CommentRemove comment={comment} onRemoveComment={this.removeComment} />
                            <CommentEdit comment={comment} onEditComment={this.editComment} />
                            <b>{comment.author}</b> {comment.body} <br /><br />
                            <small>
                                <VoteScore id={comment.id} voteScore={comment.voteScore} onVote={this.vote}/>
                            </small>
                            
                        </ListGroupItem>) : ''}
                    </div>
                </ListGroup>
                <Form onSubmit={this.handleSubmit} inline>
                    <Col lg={2} >
                        <FormGroup controlId="formAuthor" bsSize="small" style={{ width: '100%' }}>
                            
                                <FormControl
                                    type="text"
                                    name="author"
                                    placeholder="Author"
                                    style={{ width: '100%' }}
                                />
                            
                        </FormGroup>
                    </Col>
                    <Col lg={9} >
                        <FormGroup controlId="formBody" bsSize="small" style={{ width: '100%' }}>
                            
                                <FormControl
                                    type="text"
                                    name="body"
                                    placeholder="Escreva um comentário..."
                                    style={{ width: '100%' }}
                                />
                            
                        </FormGroup>
                    </Col>
                    <Col lg={1} >
                        <Button type="submit" bsSize="small" style={{ width: '100%' }}>Send</Button>
                    </Col>
                    <div style={{ clear: 'both'}}></div>
                </Form>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createComment: (post, comment) => dispatch(createComment(post, comment)),
        removeComment: (post, comment) => dispatch(removeComment(post, comment)),
    }
}


export default connect(null, mapDispatchToProps)(Comments)