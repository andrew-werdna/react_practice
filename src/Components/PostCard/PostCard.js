import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './PostCard.css';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRedirect: false,
      userRedirectLink: '',
      postRedirect: false,
      postRedirectLink: ''
    };
    this.handlePostClick = this.handlePostClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.formatLink = this.formatLink.bind(this);
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
      <div className="post-container">
        <div onClick={() => this.handleUserClick(this.props.data.userId)} className="userId">
          <span>User ID:</span> {this.props.data.userId}
        </div>
        <div onClick={() => this.handlePostClick(this.props.data.id)} className="post-title">
          <h2>{this.props.data.title}</h2>
        </div>
        <div className="post-body">
          {this.props.data.body}
        </div>
      </div>
    );
  }
}

export default PostCard;

