import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Error extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

/*  componentDidMount() {
    axios.get('/contacts/'+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }*/

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Unable to find the movie
            </h3>
          </div>
          <div class="panel-body">
          <h4><Link to="/search">
          <span class="glyphicon glyphicon-plus-sign" aria-hidden="true">
          </span> Back</Link></h4>

        </div>
        </div>
      </div>
    );
  }
}

export default Error;
