import React, { Component } from 'react';
import axios from 'axios';

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
          <div className="todo-userID">User</div>
          <div className="todo-title">Title</div>
          <div className="todo-completed">Status</div>
        </div>
        {
          this.state.todos.map(
            (todo) => {
              let k = `${todo.title}_${todo.id}`;
              return (
                <div className="todo-row">
                  <div className="todo-userID">{todo.userId}</div>
                  <div className="todo-title">{todo.title}</div>
                  <div className="todo-completed">{todo.completed.toString()}</div>
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