import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

class NavBar_PreviewEvent extends Component {
  constructor(props){
    super(props);
  }

handleClick = event => {
  this.props.createEventDetail(this.props.event_id);
}

  render() {
    return (
      <div>
        <Link to={`/events/${this.props.event_id}`} onClick={ this.handleClick } >
          <div className="dropdown-item searchItem" type="button">
            <b> {this.props.title} </b>
            {this.props.neighbourhood}
          </div>
        </Link>
        <div className="dropdown-divider"></div>
      </div>
    )
  };
}

export default NavBar_PreviewEvent;