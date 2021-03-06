import React, {Component} from 'react';

import HomePage from './HomePage/HomePage.jsx';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import BecomeHost from './BecomeHost.jsx';
import NewEventForm from './NewEventForm.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        id: null,
        first_name: '',
        last_name: '',
        is_host: false,
        is_chef: false
      }
    }
  }

  getSearchResults = searchData => {
    const searchValue = searchData.replace(/&/g," ").replace(/  +/g, ' ')
    $.ajax({
      method: "GET",
      url: `/api/events/search?search=${searchValue}`
    })
    .done(result => {
      this.setState({
        previewEvents: result,
      })
    })
    .fail(e => {
      console.error('app.jsx line 38', e);
    });
  }

  getCurrentUser = () => {
    $.ajax({
      method: "GET",
      url: "/api/users/current"
    })
    .done(result => {
      if (result !== 'no current user') {
        this.setState({
          currentUser: {
            id: result.id,
            first_name: result.first_name,
            last_name: result.last_name,
            is_host: result.is_host,
            is_chef: result.is_chef
          }
        });
      }
    })
    .fail(err => {
      console.error('Failed to Logout', err);
    })
  }

  componentDidMount() {
    this.getCurrentUser()

    window.onscroll = function() {

      if (window.pageYOffset > 0) {
        var opac = 1.1 - (window.pageYOffset / ($(window).height() / 2.4));
        $('.fullscreen-bg').css('opacity', opac);
      }
    }
  }

  clearUser = event => {
    this.setState({
      currentUser: {
        id: null,
        first_name: '',
        last_name: '',
        is_host: false,
        is_chef: false
      }
    });
  }

  render() {
    return (
      <div>
        <NavBar
          currentUser={this.state.currentUser}
          clearUser={this.clearUser}
          getCurrentUser={this.getCurrentUser}
          getSearchResults={this.getSearchResults}
        />
        <HomePage getSearchResults={this.getSearchResults} previewEvents={this.state.previewEvents} />
        <Login getCurrentUser={this.getCurrentUser} />
        <Register getCurrentUser={this.getCurrentUser} />
        <NewEventForm currentUser={this.state.currentUser}/>
        <BecomeHost getCurrentUser={this.getCurrentUser}/>
      </div>
    );
  }
}

export default App;