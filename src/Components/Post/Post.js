import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      loading: true
    };
    this.getPost = this.getPost.bind(this);
  }
  componentDidMount() {
    this.getPost();
  }
  getPost() {
    let uri = `${this.props.api.posts}/${this.props.match.params.id}`;
    axios.get(uri)
      .then(_post => {
        let nState = Object.assign({}, this.state);
        nState.post = _post.data;
        nState.loading = false;
        this.setState(nState);
      });
  }
  render() {
    return (
      <div className="post">
        <div className="post-title">
          <h1>
            { this.state.loading ? '' : this.state.post.title }
          </h1>
        </div>
        <div className="post-body">
          { this.state.loading ? '' : this.state.post.body }
        </div>
      </div>
    );
  }
}

export default Post;
