import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import '../public/stylesheets/index.scss';

injectTapEventPlugin();

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('app')
);
