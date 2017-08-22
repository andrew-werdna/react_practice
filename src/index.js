import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUri = "http://jsonplaceholder.typicode.com";
const endpoints = [
  {
    name: "posts",
    value: `${baseUri}/posts`,
  },
  {
    name: "comments",
    value: `${baseUri}/comments`,
  },
  {
    name: "albums",
    value: `${baseUri}/albums`,
  },
  {
    name: "photos",
    value: `${baseUri}/photos`,
  },
  {
    name: "todos",
    value: `${baseUri}/todos`,
  },
  {
    name: "users",
    value: `${baseUri}/users`,
  },
];

ReactDOM.render(<App api={endpoints}/>, document.getElementById('root'));
registerServiceWorker();
