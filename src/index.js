import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

const baseUri = "http://localhost:4000";
const endpoints = {
  "users": `${baseUri}/users`,
  "posts": `${baseUri}/posts`,
  "comments": `${baseUri}/comments`,
  "todos": `${baseUri}/todos`,
};

ReactDOM.render(
  <App api={endpoints}/>, 
  document.getElementById('root')
);
registerServiceWorker();
