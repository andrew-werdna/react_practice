import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.data)}</div>
    );
  }
}

export default User;