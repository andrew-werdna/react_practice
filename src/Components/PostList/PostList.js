import React, { Component } from 'react';
import axios from 'axios';
import PostCard from '../PostCard/PostCard';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
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
      <div className="posts-container">
        {
          this.state.posts.map(
            (post) => {
              let k = `${post.title}_${post.id}`;
              return ( 
                <PostCard api={this.props.api} key={k} data={{
                  id: post.id,
                  title: post.title,
                  userId: post.userId,
                  body: post.body
                }} />
              );
            }
          )
        }
      </div>
    );
  }
}

export default PostList;