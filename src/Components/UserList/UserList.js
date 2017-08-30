import React, { Component } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';

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
    axios.get(this.props.api.users)
      .then(_users => {
        this.setState({
          users: _users.data
        });
      });
  }
  render() {
    return (
      <div className="users-container">
        <h2>&nbsp;</h2>
        {
          this.state.users.map(
            (user) => {
              return (
                <UserCard key={user.name} data={{
                  name: user.name,
                  image: user.profile_image,
                  email: user.email
                }} />
              );
            }
          )
        }
      </div>
    );
  }
};

export default UserList;
