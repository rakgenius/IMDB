import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import Search from './component/Search';
import Show from './component/Show';
import Error from './component/Error';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={Search} />
        <Route path='/search' component={Search} />
        <Route path='/show/:id' component={Show} />
        <Route path='/error' component={Error} />
      </div>
  </Router>,
  document.getElementById('root')
);
