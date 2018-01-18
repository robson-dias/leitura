import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { getPostsAPI, createPostAPI } from './Util/api'
import PostList from './Components/PostList'
import Menu from './Components/Menu'

class App extends Component {

  state = {
    posts: []
  }

  getPosts = (category) => {
    getPostsAPI(category).then((posts) => {
      this.setState({ posts })
    })
  }

  createPost = (post) => {
    createPostAPI(post).then(post => {
      this.setState(state => ({
        posts: state.posts.concat([post])
      }))
    })
  }

  render() {
    return (
      <div className="container">

        <Route exact path='/' render={({ match }) => (
          <div>
            <Menu
              match={match}
              createPost={this.createPost}
            />
            <PostList
              posts={this.state.posts}
              onGetPosts={this.getPosts}
            />
          </div>
        )} />

        <Route path='/react' render={({ match }) => (
          <div>
            <Menu 
              match={match} 
              createPost={this.createPost}
            />
            <PostList
              category={'react'}
              posts={this.state.posts}
              onGetPosts={this.getPosts}
            />
          </div>
        )} />

        <Route path='/redux' render={({ match }) => (
          <div>
            <Menu
              match={match}
              createPost={this.createPost}
            />
            <PostList
              category={'redux'}
              posts={this.state.posts}
              onGetPosts={this.getPosts}
            />
          </div>
        )} />

        <Route path='/udacity' render={({ match }) => (
          <div>
            <Menu
              match={match}
              createPost={this.createPost}
            />
            <PostList
              category={'udacity'}
              posts={this.state.posts}
              onGetPosts={this.getPosts}
            />
          </div>
        )} />
      
      </div>
    );
  }
}

export default App;
