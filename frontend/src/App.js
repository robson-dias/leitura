import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { getPostsAPI, createPostAPI, getCategoriesAPI } from './Util/api'
import PostList from './Components/PostList'
import Menu from './Components/Menu'

class App extends Component {

  state = {
    categories: [],
    posts: [],
    order: '-voteScore'
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

  setOrder = (order) => {
    this.setState({ order })
  }

  render() {

    const { posts, categories, order } = this.state

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
              order={order}
              setOrder={this.setOrder}
            />
          </div>
        )} />

        {categories.map((category) => 
          <Route key={category.path} path={`/${category.path}`} render={({ match }) => (
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
                order={order}
                setOrder={this.setOrder}
              />
            </div>
          )} />
        )} 

      </div>
    );
  }
}

export default App;
