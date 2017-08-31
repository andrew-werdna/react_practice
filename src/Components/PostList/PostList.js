import React, { Component } from 'react';
import axios from 'axios';

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
    let uri = `${this.props.api.posts}?userId=${this.props.match.params.id}`;
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
      <div>{JSON.stringify(this.state)}</div>
    );
  }
}

export default PostList;