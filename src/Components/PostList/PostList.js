import React, { Component } from 'react';
import axios from 'axios';
import './PostList.css';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
    this.getPosts = this.getPosts.bind(this);
  }
  componentDidMount() {
    this.getPosts();
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
    return (
      <div className="post-list">
        {
          this.state.posts.map((post) => {
            let k = `${post.title}_${post.id}`;
            return (
              <div key={k} className="post-container">
                <div className="userId">
                  <span>User ID:</span> {post.userId}
                </div>
                <div className="post-title">
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