import React, {Component} from 'react';
import './AppPage.css'
import SwipeCards from '../../CommonComponent/Header/Components/SwipeCards/SwipeCards';

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