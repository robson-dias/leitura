import React, { Component } from 'react'
import './App.css'
import { getAllPostsAPI, createPostAPI } from './Util/api'
import PostList from './Components/PostList'
import PostCreate from './Components/PostCreate'

class App extends Component {

  state = {
    posts: []
  }

  getAllPosts = () => {
    getAllPostsAPI().then((posts) => {
      this.setState({ posts })
    })
  }

  createPost = (post) => {

    console.log(post)

    createPostAPI(post).then(post => {
      this.setState(state => ({
        posts: state.posts.concat([post])
      }))
    })
  }

  render() {
    return (
      <div className="container">

      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">Leitura</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/">All</a></li>
                <li><a href="/">React</a></li>
                <li><a href="/">Redux</a></li>
                <li><a href="/">Udacity</a></li>
                
              </ul>
              <ul className="nav navbar-nav navbar-right" style={{marginTop: '7px'}}>
                <li>
                  <PostCreate 
                    onCreatePost={this.createPost} 
                  />
                </li>
              </ul>
            </div>
        </div>
      </nav>

      <PostList 
          posts={this.state.posts}
          onGetAllPosts={this.getAllPosts}          
      />

      </div>
    );
  }
}

export default App;
