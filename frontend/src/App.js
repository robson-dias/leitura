import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import PostList from './Components/PostList'
import PostDetails from './Components/PostDetails'
import Menu from './Components/Menu'
import { fetchPosts, fetchCategories } from './Actions'

class App extends Component {

  state = {
    order: '-voteScore'
  }

  componentDidMount() {
    this.props.receiveCategories()
    this.props.receivePosts()
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
            <Menu category={match.params.category} />
            <PostList
              order={order}
              setOrder={this.setOrder}
            />
          </div>
        )} />

        <Route exact path="/:category" render={({ match }) => ( 
          <div>
            <Menu page={match.params.category} />
            <PostList
              page={match.params.category}
              order={order}
              setOrder={this.setOrder}
            />
          </div>
        )} />

        <Route path="/:category/:post_id" render={({ match }) => (
          <div>
            <Menu page={match.params.category} />
            <PostDetails post_id={match.params.post_id} />
          </div>
        )} />

      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: posts,
    categories: categories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    receivePosts: () => dispatch(fetchPosts()),
    receiveCategories: () => dispatch(fetchCategories()),
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(App))
