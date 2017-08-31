import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.getUser = this.getUser.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }
  getUser() {
    let uri = `${this.props.api.users}/${this.props.match.params.id}`;
    console.log(uri);
    axios.get(uri)
      .then(_user => {
        console.log(_user);
        this.setState({
          user: _user.data
        });
      });
  }
  render() {
    return (
      <div>{JSON.stringify(this.state.user)}</div>
    );
  }
}

export default User;