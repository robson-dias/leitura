import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { getPostsAPI, createPostAPI, getCategoriesAPI } from './Util/api'
import PostList from './Components/PostList'
import Menu from './Components/Menu'

class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  componentDidMount() {
    getCategoriesAPI(getCategoriesAPI).then((categories) => {
      this.setState({ categories })
    })
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

    const { posts, categories } = this.state

    return (
      <div className="container">

        <Route exact path='/' render={({ match }) => (
          <div>
            <Menu
              match={match}
              categories={categories}
              createPost={this.createPost}
            />
            <PostList
              posts={posts}
              onGetPosts={this.getPosts}
            />
          </div>
        )} />

        {categories.map((category) => 
          <Route path={`/${category.path}`} render={({ match }) => (
            <div>
              <Menu
                match={match}
                categories={categories}
                createPost={this.createPost}
              />
              <PostList
                category={category.path}
                posts={posts}
                onGetPosts={this.getPosts}
              />
            </div>
          )} />
        )} 

      </div>
    );
  }
}

export default App;
