import React, { Component } from 'react'
import Post from './Post'
import { getAllPosts } from '../Util/api'
//import { ulid } from 'ulid'

class PostList extends Component {
    state = {
        posts: []
    }
    componentDidMount() {

    /*     const postTeste = {
            id: ulid(),
            timestamp: Date.now(),
            title : 'Titulo',
            body:'Body',
            author: 'Robson',
            category: 'react'
        }

        createPost(postTeste).then(post => {
            console.log('createPost', post)
        }) */

        getAllPosts().then((posts) => {
            this.setState({posts})
        })
    }
    render () {

        const {posts} = this.state

        return (
            <div>
                {posts.map((post) => 
                    <Post 
                        key={post.id}
                        title={`${post.title}`}
                        body={post.body}
                        footer={`Author: ${post.author}, Category: ${post.category}`}
                    />
                )}
            </div>
        )
    }
}

export default PostList