import React, { Component } from 'react';
import './UserCard.css';
import { Redirect } from 'react-router-dom';

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      link: this.props.api.users.slice(window.location.origin.length) + `/${this.props.data.id}`
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let nState = Object.assign({}, this.state);
    nState.redirect = true;
    this.setState(nState);
  }
  render() {
    if ( this.state.redirect ) {
      return (
        <Redirect to={`${this.state.link}`} />
      );
    }
    return (
      <div onClick={this.handleClick} className="user-card">
        <div className="user-card-image">
          <img alt={this.props.data.name} src={this.props.data.image.length ? this.props.data.image.length : "images/profile.png" } />
        </div>
        <div className="user-card-details">
          <div className="user-card-name">
            {this.props.data.name}
          </div>
          <div className="user-card-email">
            {this.props.data.email}
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
