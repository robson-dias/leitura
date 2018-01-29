import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import PostEdit from './PostEdit'
import PostRemove from './PostRemove'
import Comments from './Comments'
import VoteScore from './VoteScore'
import { votePost, fetchComments, removeComment } from '../Actions'

class Post extends Component {
   
    componentDidMount() {
        const { post } = this.props
        this.props.receiveComments(post)
    }

    render() {
        const { post, votePost } = this.props

        const datePost = new Date(post.timestamp)

        // Create an array with the current month, day and time
        const date = [datePost.getDate(), datePost.getMonth() + 1,datePost.getFullYear()].map(d => d.toString().length === 1 ? "0" + d : d)

        // Create an array with the current hour, minute and second
        const time = [datePost.getHours(), datePost.getMinutes(), datePost.getSeconds()].map(d => d.toString().length === 1 ? "0" + d : d)

        const dateFullString = `${date.join("/")} - ${time.join(":")}`

        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">
                        <div className="pull-right">                    

                            <PostRemove post={post} />

                            <PostEdit post={post} />

                        </div>
                        <b>{post.title}</b><br /><small>Postado em: {dateFullString}</small>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <p>{post.body}</p>
                    <hr />
                    <div>
                        <small>Category: {post.category}</small>, <small>Author: {post.author}</small>
                    </div>
                </Panel.Body>
                <Panel.Footer>
                    <VoteScore id={post.id} voteScore={post.voteScore} onVote={votePost} />
                </Panel.Footer>
                <Panel.Footer>
                    <Comments 
                        post={post} 
                        comments={post.comments || {}} 
                        onReceiveComments={this.props.receiveComments}
                        onRemoveComment={this.props.removeComment}
                    />
                </Panel.Footer>
            </Panel>
        )
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, post) => dispatch(votePost(id, post)),
        receiveComments: (post) => dispatch(fetchComments(post)),
        removeComment: (post, comment) => dispatch(removeComment(post, comment)),
    }
}


export default connect(null, mapDispatchToProps)(Post)