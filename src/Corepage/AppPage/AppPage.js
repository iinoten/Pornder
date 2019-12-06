import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route} from 'react-router-dom'
import './AppPage.css'
import Header from '../../CommonComponent/Header/Header';
import SwipeCards from '../../CommonComponent/Header/Components/SwipeCards/SwipeCards';
import SwipeContainer from './SwipeContainer/SwipeContainer';
import SuperLikeAlert from '../../CommonComponent/Header/Components/SuperLikeAlert/SuperLikeAlert';

import posed from 'react-pose'

const SuperLikeBox = posed.div({
  open: {
    top: '50%',
    opacity: 0
  },
  close: {
    top: '-50%',
    opacity: 1
  }
})

class AppPage extends Component{
  constructor() {
    super();
    this.state = {
      is_open_SuperLike_Alert: false
    }
  }
  componentDidMount() {
    this.setState({is_open_SuperLike_Alert: !this.state.is_open_SuperLike_Alert})
  }
  render(){
    return(
      <div className="App-page">
        <SwipeCards popup_yet_alert={this.props.popup_yet_alert} cards={this.props.cards} update={this.props.update} add_like_video={this.props.add_like_video} />
      </div>
    );
  }
}

export default AppPage;