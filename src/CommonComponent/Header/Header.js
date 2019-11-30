import React, {Component} from 'react';

import './Header.css'

class Header extends Component{
  render(){
    return(
      <div>
        <div  className="App-header">
            <div className="Header-icon account_icon" />
            <div className="Header-icon mark_icon" />
            <div className="Header-icon matches_icon" />
        </div>
      </div>
    );
  }
}

export default Header;