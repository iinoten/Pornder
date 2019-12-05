import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route} from 'react-router-dom'
import './AppPage.css'
import Header from '../../CommonComponent/Header/Header';
import SwipeCards from '../../CommonComponent/Header/Components/SwipeCards/SwipeCards';
import SwipeContainer from './SwipeContainer/SwipeContainer';

class AppPage extends Component{
  render(){
    return(
      <div className="App-page">
        <SwipeCards cards={this.props.cards} update={this.props.update} add_like_video={this.props.add_like_video} />
      </div>
    );
  }
}

export default AppPage;