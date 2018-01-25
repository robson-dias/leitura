import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

class VoteScore extends Component {

    handleVote = (vote) => {
        const { id, onVote } = this.props
        onVote(id, vote)
    }

    render() {

        const { voteScore } = this.props

        return (
            <span>
                Vote Score: {voteScore} {' '}
                <Button bsSize="xs" onClick={() => this.handleVote({ option: 'upVote' })}><Glyphicon glyph="thumbs-up" /></Button> {' '}
                <Button bsSize="xs" onClick={() => this.handleVote({ option: 'downVote' })}><Glyphicon glyph="thumbs-down" /></Button>
            </span>
        )
    }

}

export default VoteScore