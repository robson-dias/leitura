import React, { Component } from 'react'
import Post from './Post'
import { Alert, Button } from 'react-bootstrap'

class PostList extends Component {
    componentDidMount() {
        this.props.onGetPosts(this.props.category || '');
    }

    render () {

        const {posts} = this.props

        return (
            <div>
                {posts.length > 0 ? 
                    posts.map((post) => 
                        <Post 
                            key={post.id}
                            title={`${post.title}`}
                            body={post.body}
                            category={post.category}
                            author={post.author}
                            footer={`Rodape`}
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

export default PostList