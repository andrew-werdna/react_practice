import React, { Component } from 'react';
import axios from 'axios';
import User from '../User/User';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.getUsers = this.getUsers.bind(this);
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    axios.get(this.props.endpoint)
      .then(_users => {
        this.setState({
          users: _users.data
        });
      });
  }
  render() {
    return (
      <div className="users-container">
        <h2>Users</h2>
        {
          this.state.users.map(
            (user) => {
              return (
                <User key={user.name} data={user} />
              );
            }
          )
        }
      </div>
    );
  }
};

export default UserList;
