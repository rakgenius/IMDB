import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    axios.get('/')
      .then(res => {
        this.setState({ contacts: res.data });
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Movie List
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/search">
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true">
            </span> Search</Link></h4>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
