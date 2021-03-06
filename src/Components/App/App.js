import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import UserList from '../UserList/UserList';
import User from '../User/User';
import PostList from '../PostList/PostList';
import Post from '../Post/Post';
import TodoList from '../TodoList/TodoList';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>My First React App</h2>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/posts">Posts</Link></li>
              <li><Link to="/todos">Todos</Link></li>
            </ul>
          </nav>
          
          <Route exact path="/" render={
            props => ( <Redirect to='/users' /> )
          } />
          <Route exact path="/users/:id" render={
            props => ( <User api={this.props.api} {...props} /> )
          } />
          <Route exact path="/users/:id/posts" render={
            props => ( <PostList api={this.props.api} {...props} /> )
          } />
          <Route exact path="/users/:id/todos" render={
            props => ( <TodoList api={this.props.api} {...props} /> )
          } />
          <Route exact path="/todos" render={
            props => ( <TodoList api={this.props.api} /> )
          } />
          <Route exact path="/users" render={
            props => ( <UserList api={this.props.api} /> ) 
          } />
          <Route path="/posts/:id" render={
            props => ( <Post api={this.props.api} {...props} /> ) 
          } />
          {/* <Route path="/posts/:id/comments" render={
            props => ( <CommentList api={this.props.api} {...props} /> )
          } /> */}
          <Route exact path="/posts" render={
            props => ( <PostList api={this.props.api} /> ) 
          } />

        </div>
      </Router>
    );
  }
}

export default App;
