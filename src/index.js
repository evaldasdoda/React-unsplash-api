import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/style.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO --> React Redux tutorial: connecting React with Redux
// FROM --> https://www.valentinog.com/blog/redux/

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
