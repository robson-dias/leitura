import React, { Component } from 'react'
import Post from './Post'

class PostList extends Component {
    componentDidMount() {
        this.props.onGetAllPosts();
    }

    render () {

        const {posts} = this.props

        return (
            <div>
                {posts.map((post) => 
                    <Post 
                        key={post.id}
                        title={`${post.title}`}
                        body={post.body}
                        category={post.category}
                        author={post.author}
                        footer={`Rodape`}
                    />
                )}
            </div>
        )
    }
}

export default PostList