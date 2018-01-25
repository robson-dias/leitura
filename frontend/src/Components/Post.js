import React from 'react'
import { Panel } from 'react-bootstrap'
import PostEdit from './PostEdit'
import PostRemove from './PostRemove'
import Comments from './Comments'
import VoteScore from './VoteScore'

export default function Post (props) {
   
    const { post, onEditPost, onRemovePost, onVotePost } = props

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

                        <PostRemove post={post} onRemovePost={onRemovePost} />

                        <PostEdit post={post} onEditPost={onEditPost} />

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
                <VoteScore id={post.id} voteScore={post.voteScore} onVote={onVotePost} />
            </Panel.Footer>
            <Panel.Footer>
                <Comments post={post} />
            </Panel.Footer>
        </Panel>
    )
    
}