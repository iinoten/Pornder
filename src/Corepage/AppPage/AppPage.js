import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route} from 'react-router-dom'
import './AppPage.css'
import Header from '../../CommonComponent/Header/Header';
import SwipeCards from '../../CommonComponent/Header/Components/SwipeCards/SwipeCards';

class AppPage extends Component{
  render(){
    return(
      <div className="App-page">
        <SwipeCards />
      </div>
    );
  }
}

export default AppPage;