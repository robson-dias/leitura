import React, { Component } from 'react'
import Post from './Post'


class PostList extends Component {
    render () {

        const posts = [{
                'title' : 'Title 1',
                'body': 'Body 1',
                'footer': 'Footer 1',
            },
            {
                'title': 'Title 2',
                'body': 'Body 2',
                'footer': 'Footer 2',
            },
            {
                'title': 'Title 3',
                'body': 'Body 3',
                'footer': 'Footer 3',
            }
        ]

        return (
            <div>
                {posts.map((post) => 
                    <Post 
                        title={post.title}
                        body={post.body}
                        footer={post.footer}
                    />
                )}
            </div>
        )
    }
}

export default PostList