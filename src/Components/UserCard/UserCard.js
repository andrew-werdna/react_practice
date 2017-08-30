import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {
  render() {
    return (
      <div className="user-card">
        <div className="user-card-image">
          <img src={this.props.data.image.length ? this.props.data.image.length : "images/profile.png" } />
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
