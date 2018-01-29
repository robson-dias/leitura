import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Form, FormGroup, FormControl, Button, Col, Glyphicon } from 'react-bootstrap'
import sortBy from 'sort-by'
import { ulid } from 'ulid'
import serializeForm from 'form-serialize'
import CommentRemove from './CommentRemove'
import CommentEdit from './CommentEdit'
import VoteScore from './VoteScore'
import { fetchComments, createComment, removeComment, editComment, voteComment } from '../Actions'

class Comments extends Component {

    state = {
        show: false
    }

    componentDidMount() {
        const { post } = this.props
        this.props.receiveComments(post)
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
        const { post, editComment } = this.props
        editComment(post, comment)
    }

    vote = (id, vote) => {
        const { post, voteComment } = this.props
        voteComment(post, id, vote)
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
        receiveComments: (post) => dispatch(fetchComments(post)),
        createComment: (post, comment) => dispatch(createComment(post, comment)),
        removeComment: (post, comment) => dispatch(removeComment(post, comment)),
        editComment: (post, comment) => dispatch(editComment(post, comment)),
        voteComment: (post, id, vote) => dispatch(voteComment(post, id, vote))
    }
}


export default connect(null, mapDispatchToProps)(Comments)