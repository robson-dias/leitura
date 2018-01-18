import React, { Component } from 'react'
import Post from './Post'
import { Alert } from 'react-bootstrap'
import sortBy from 'sort-by'


class PostList extends Component {
    componentDidMount() {
        this.props.onGetPosts(this.props.category || '');
    }

    render () {

        const {posts} = this.props

        posts.sort(sortBy('-voteScore'))

        return (
            <div>
                {posts.length > 0 ? 
                    posts.map((post) => 
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

export default PostList