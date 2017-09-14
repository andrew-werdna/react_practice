import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: true
    };
    this.getTodos = this.getTodos.bind(this);
  }
  componentDidMount() {
    this.getTodos();
  }
  getTodos() {
    let uri;
    if ( this.props.match ) {
      uri = `${this.props.api.todos}?userId=${this.props.match.params.id}`;
    }
    else {
      uri = `${this.props.api.todos}`;
    }
    axios.get(uri)
      .then(_todos => {
        let nState = Object.assign({}, this.state);
        nState.todos = _todos.data;
        nState.loading = false;
        this.setState(nState);
      });
  }
  render() {
    return (
      <div className="todos-container">
        <div className="todo-row">
          <div className="todo-userID header">User</div>
          <div className="todo-title header">Title</div>
          <div className="todo-completed header">Status</div>
        </div>
        {
          this.state.todos.map(
            (todo) => {
              let k = `${todo.title}_${todo.id}`;
              let userLink = `/users/${todo.userId}`;
              return (
                <div key={k} className="todo-row">
                  <div className="todo-userID"><Link to={userLink}>view user</Link></div>
                  <div className="todo-title">{todo.title}</div>
                  <div className="todo-completed">{todo.completed ? "COMPLETE" : "In Progress"}</div>
                </div>
              );
            }
          )
        }
      </div>
    );
  }
}

export default TodoList;