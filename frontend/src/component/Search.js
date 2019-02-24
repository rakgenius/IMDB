import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
    contact: {}
    };
  }

  onChange = (e) => {
    const state = this.state.contact
    state[e.target.name] = e.target.value;
    this.setState({contact:state});
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.get('/')
          .then((result) => {
          //console.log("id is " + this.props.match.params.id);
          //console.log("id is " + this.state.id);
          console.log("id is " + this.state.contact.id);
            this.props.history.push("/show/"+this.state.contact.id)
          });
    /*(async () => {
        try {
            this.setState({contact: await this.getData()});
            console.log("state data is " + this.state.contact.Title);
            this.props.history.push("/show/"+this.state.contact);
            console.log("got the data");
        } catch (error) {
            if (error.response) {
                 console.log(error);
                 this.props.history.push("/error")
             } else if (error.request) {
                 console.log(error.request);
                 this.props.history.push("/error")
             } else {
                 console.log(error.message);
                 this.props.history.push("/error")
             }
             console.log(error);


        }
    })();*/



  }


    /*async getData()  {
      console.log('id is ' + this.state.id);
      console.log("link is /imdb/movie/" + this.state.id );
        const res = await axios.get('/imdb/movie/'+this.state.id);
        //const { data } = await res;
        console.log("gottttt the dataaaaa");
        console.log(res);
        console.log('data is ' + res.data.imdbID);
        return await res.data;
    }*/


  render() {
  const { id } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Welcome to IMDB
            </h3>
          </div>
          <br></br>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Enter Movie Name:</label>
                <input type="text" class="form-control" name="id" value={this.state.contact.id} onChange={this.onChange} placeholder="Name" />
              </div>
              <button type="submit" class="btn btn-success">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
