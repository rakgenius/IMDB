import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {},
      isLoading: false
    };

  }

  componentDidMount() {

        this.getData();
        /*.then(contact => this.setState({contact}))
             .catch(error => {
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

             });*/



     /*if (this.state.contact) {
        console.log("calling the async function");
                (async () => {
                    try {
                        this.setState({contact: await this.getData()});
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
                })();
            } else {
            console.log("why the contact is not null");
            }*/
  }

  getData()  {
    this.setState({isLoading: true});
    //const res = await axios.get('/imdb/movie/'+this.props.match.params.id);
    //const res = axios.get('/imdb/movie/'+this.props.match.params.id);
    //const { data } =  res.data;
    //return await res.data;

    console.log(this.props.match.params.id);
    axios.get('/imdb/movie/'+this.props.match.params.id)
          .then(res => {
            this.setState({ contact: res.data,
                            isLoading: false});

          })
          .catch((error) => {
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
          });
  }

  renderLoading() {
    return (<div class="loader"></div>);
  }

  render() {
    const isLoading = this.state.isLoading;

    if (isLoading) {
        return this.renderLoading();
    } else {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Movie Details
            </h3>
          </div>
          <div class="panel-body">

            <dl>
              <dt>Title:</dt>
              <dd>{this.state.contact.Title}</dd>
              <dt>Year:</dt>
              <dd>{this.state.contact.Year}</dd>
              <dt>Type:</dt>
                <dd>{this.state.contact.Type}</dd>
              <dt>Rated:</dt>
            <dd>{this.state.contact.Rated}</dd>
            <dt>Released:</dt>
              <dd>{this.state.contact.Released}</dd>
              <dt>Runtime:</dt>
                <dd>{this.state.contact.Runtime}</dd>
              <dt>Title:</dt>
                <dd>{this.state.contact.Title}</dd>
                <dt>Director:</dt>
              <dd>{this.state.contact.Director}</dd>
              <dt>Writer:</dt>
                <dd>{this.state.contact.Writer}</dd>
              <dt>Actors:</dt>
              <dd>{this.state.contact.Actors}</dd>
              <dt>Genre:</dt>
              <dd>{this.state.contact.Genre}</dd>
              <dt>Language:</dt>
                <dd>{this.state.contact.Language}</dd>
                <dt>Country:</dt>
                  <dd>{this.state.contact.Country}</dd>
              <dt>Awards:</dt>
                <dd>{this.state.contact.Awards}</dd>
              <dt>Poster:</dt>
                <dd>{this.state.contact.Poster}</dd>
              <dt>Imdb Rating:</dt>
                <dd>{this.state.contact.imdbRating}</dd>
                <dt>Imdb Votes:</dt>
              <dd>{this.state.contact.imdbVotes}</dd>
              <dt>Boxoffice:</dt>
                <dd>{this.state.contact.BoxOffice}</dd>
              <dt>Production:</dt>
                <dd>{this.state.contact.Production}</dd>
              <dt>Website:</dt>
                <dd>{this.state.contact.Website}</dd>
              <dt>Plot:</dt>
              <dd>{this.state.contact.Plot}</dd>
              <dt>Imdb ID:</dt>
              <dd>{this.state.contact.imdbID}</dd>
            </dl>
           </div>
           <Link to={`/search`} class="btn btn-success">Back</Link>&nbsp;
        </div>
      </div>
    );
    }
  }
}

export default Show;