import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

const baseUri = "http://jsonplaceholder.typicode.com";
const endpoints = {
  "users": `${baseUri}/users`,
  "posts": `${baseUri}/posts`,
  "comments": `${baseUri}/comments`,
  "photos": `${baseUri}/photos`,
  "todos": `${baseUri}/todos`,
  "albums": `${baseUri}/albums`,
};

ReactDOM.render(
  <App api={endpoints}/>, 
  document.getElementById('root')
);
registerServiceWorker();
