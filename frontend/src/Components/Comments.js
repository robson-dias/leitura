import React, { Component } from 'react'
import { getCommentsAPI, createCommentAPI, removeCommentAPI, editCommentAPI, voteCommentAPI } from '../Util/api'
import { ListGroup, ListGroupItem, Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap'
import sortBy from 'sort-by'
import { ulid } from 'ulid'
import serializeForm from 'form-serialize'
import CommentRemove from './CommentRemove'
import CommentEdit from './CommentEdit'
import VoteScore from './VoteScore'

class Comments extends Component {

    state = {
        comments: {}
    }

    componentDidMount() {

        getCommentsAPI(this.props.post).then((comments) => {
            this.setState({ comments })
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()

        const values = serializeForm(e.target, { hash: true })

        const { post } = this.props

        createCommentAPI({
            ...values,
            id: ulid(),
            timestamp: Date.now(),
            parentId: post.id
        }).then((comment) => {
            const { comments } = this.state

            this.setState({ comments: comments.concat([comment])})
        })


    }

    removeComment= (comment) => {
        removeCommentAPI(comment).then(comment => {
            const { comments } = this.state
            this.setState({ comments: comments.filter(stateComment => stateComment.id !== comment.id) })
        })
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

        const { comments } = this.state

        if (comments.length > 0)
             comments.sort(sortBy('-voteScore'))

        return (
            <div>
                <ListGroup>
                    {comments.length > 0 ? comments.map(comment => 
                        <ListGroupItem key={comment.id}>
                            <CommentRemove comment={comment} onRemoveComment={this.removeComment} />
                            <CommentEdit comment={comment} onEditComment={this.editComment} />
                            <b>{comment.author}</b> {comment.body} <br /><br />
                            <small>
                                <VoteScore id={comment.id} voteScore={comment.voteScore} onVote={this.vote}/>
                            </small>
                            
                    </ListGroupItem>) : ''}
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

export default Comments