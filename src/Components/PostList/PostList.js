import React, { Component } from 'react';
import axios from 'axios';
import './PostList.css';
import { Redirect } from 'react-router-dom';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      userRedirect: false,
      userRedirectLink: '',
      postRedirect: false,
      postRedirectLink: ''
    };
    this.getPosts = this.getPosts.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.formatLink = this.formatLink.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }
  formatLink(link) {
    return link.slice(window.origin.length);
  }
  handleUserClick(id) {
    let nState = Object.assign({}, this.state);
    let link = this.formatLink(this.props.api.users);
    nState.userRedirect = true;
    nState.userRedirectLink = `${link}/${id}`;
    this.setState(nState);
  }
  handlePostClick(id) {
    let nState = Object.assign({}, this.state);
    let link = this.formatLink(this.props.api.posts);
    nState.postRedirect = true;
    nState.postRedirectLink = `${link}/${id}`;
    this.setState(nState);
  }
  getPosts() {
    let uri;
    if ( this.props.match ) {
      uri = `${this.props.api.posts}?userId=${this.props.match.params.id}`;
    }
    else {
      uri = `${this.props.api.posts}`;
    }
    axios.get(uri)
      .then(_posts => {
        let nState = Object.assign({}, this.state);
        nState.posts = _posts.data;
        nState.loading = false;
        this.setState(nState);
      });
  }
  render() {
    if ( this.state.userRedirect ) {
      return (
        <Redirect to={`${this.state.userRedirectLink}`} />
      );
    }
    else if ( this.state.postRedirect ) {
      return (
        <Redirect to={`${this.state.postRedirectLink}`} />
      );
    }
    return (
      <div className="post-list">
        {
          this.state.posts.map((post) => {
            let k = `${post.title}_${post.id}`;
            return (
              <div key={k} className="post-container">
                <div onClick={() => this.handleUserClick(post.userId)} className="userId">
                  <span>User ID:</span> {post.userId}
                </div>
                <div onClick={() => this.handlePostClick(post.id)} className="post-title">
                  <h2>{post.title}</h2>
                </div>
                <div className="post-body">
                  {post.body}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default PostList;