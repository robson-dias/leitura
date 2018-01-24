import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import { getPostsAPI, createPostAPI, getCategoriesAPI, editPostAPI } from './Util/api'
import PostList from './Components/PostList'
import Menu from './Components/Menu'
import { addPostsAction, addCategoriesAction, createPostAction, editPostAction } from './Actions'

class App extends Component {

  state = {
    order: '-voteScore'
  }

  componentDidMount() {

    getCategoriesAPI().then((categories) => {
      this.props.addCategories({ categories })
    })

    getPostsAPI().then((posts) => {
      this.props.addPosts({ posts })
    })
    
  }

  createPost = (post) => {
    createPostAPI(post).then(post => {
      this.props.createPost({post})
    }) 
  }

  editPost = (post) => {
    editPostAPI(post).then(post => {
      console.log('EDIT', post)
      this.props.editPost({ post })
    })
  }

  setOrder = (order) => {
    this.setState({ order })
  }

  render() {

    const { order } = this.state

    return (
      <div className="container">

        <Route exact path="/" render={({ match }) => (
          <div>
            <Menu
              category={match.params.category}
              createPost={this.createPost}
            />
            <PostList
              order={order}
              setOrder={this.setOrder}
              onEditPost={this.editPost}
            />
          </div>
        )} />

        <Route path="/:category" render={({ match }) => ( 
          <div>
            <Menu
              page={match.params.category}
              createPost={this.createPost}
            />
            <PostList
              page={match.params.category}
              order={order}
              setOrder={this.setOrder}
              onEditPost={this.editPost}
            />
          </div>
        )} />

      </div>
    );
  }
}

function mapStateToProps({posts, categories}) {
  return {
    posts: posts,
    categories: categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPosts: (data) => dispatch(addPostsAction(data)),
    addCategories: (data) => dispatch(addCategoriesAction(data)),
    createPost: (data) => dispatch(createPostAction(data)),
    editPost: (data) => dispatch(editPostAction(data)),
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(App))
