import React from 'react'
import { Panel, Button, Glyphicon, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap'
import PostEdit from './PostEdit'
import PostRemove from './PostRemove'

export default function Post (props) {
   
    const { post, onEditPost, onRemovePost } = props

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
                    <ButtonToolbar className="pull-right">
                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">{'Detalhes'}</Tooltip>}>
                            <Button bsStyle="info" bsSize="small">
                                <Glyphicon glyph="file" />
                            </Button>
                        </OverlayTrigger>

                        <PostEdit post={post} onEditPost={onEditPost} />

                        <PostRemove post={post} onRemovePost={onRemovePost} />

                    </ButtonToolbar>
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
            <Panel.Footer>Vote Score: {post.voteScore}</Panel.Footer>
        </Panel>
    )
    
}