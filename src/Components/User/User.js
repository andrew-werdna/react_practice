import React, { Component } from 'react';
import axios from 'axios';
import './User.css';
import { Link } from 'react-router-dom';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loading: true
    };
    this.getUser = this.getUser.bind(this);
    this.parseNestedObject = this.parseNestedObject.bind(this);
    this.parseSimpleValues = this.parseSimpleValues.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }
  getUser() {
    let uri = `${this.props.api.users}/${this.props.match.params.id}`;
    axios.get(uri)
      .then(_user => {
        let nState = Object.assign({}, this.state);
        nState.user = _user.data;
        nState.loading = false;
        this.setState(nState);
      });
  }
  parseSimpleValues(propName) {
    if ( propName === 'id' || propName === 'profile_image' ) {
      return null;
    }
    let _key = "user_" + propName + this.state.user.id;
    return (
      <div key={_key} className="user-info-pair">
        <div className="user-info-key">
          {propName}:
        </div>
        <div className="user-info-value">
          {this.state.user[propName]}
        </div>
      </div>
    );
  }
  parseNestedObject(propName) {
    let k = 'user_' + this.state.user.id + '_' + propName;
    return (
      <div key={k} className="user-info-pair">
        <div className="user-info-complex">
          {
            Object.keys(this.state.user[propName]).map((nPropName) => {
              let _key = propName + '_' + nPropName;
              if ( nPropName === 'geo' ) {
                return null;
              }
              return (
                <div key={_key} className="user-info-nested">
                  <div className="user-info-key">
                    {propName}_{nPropName}:
                  </div>
                  <div className="user-info-value">
                    {this.state.user[propName][nPropName]}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="user-container">
        <div className="user-image">
          <img alt={this.state.loading ? "" : this.state.user.name} src={this.state.loading ? "" : this.state.user['profile_image'].length ? this.state.user.profile_image : "/images/profile.png"} />
        </div>
        <div className="user-info-container">
          <div className="post-link">
            <Link to={`/users/${this.state.user.id}/posts`}>See Posts By This User</Link>
          </div>
          <div className="todo-link">
            <Link to={`/users/${this.state.user.id}/todos`}>See Todos By This User</Link>
          </div>
          {
            Object.keys(this.state.user).map((propName) => {
              if ( (/string|number|boolean/).test(typeof this.state.user[propName]) ) {
                return this.parseSimpleValues(propName);
              } // if scalar
              return this.parseNestedObject(propName);
            })
          }
        </div>
      </div>
    );
  }
}

export default User;