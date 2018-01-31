import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Alert } from 'react-bootstrap'

class PostDetails extends Component {

    render() {

        const { posts, post_id } = this.props
        const post = (posts.length > 0 ? posts.filter(post => post.id === post_id) : {})

        return (
            <div>
                {post.length > 0 ?
                    post.map((post) =>
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ) :
                    <Alert bsStyle="warning">
                        <strong>Nenhum post encontrado!</strong> Clique em <b>New Post</b> para adicionar uma nova postagem.
                    </Alert>
                }
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        posts: posts,
    }
}

export default connect(mapStateToProps)(PostDetails)
