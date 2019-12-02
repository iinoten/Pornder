import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './Header.css'

const SomeComponent = withRouter(props => <Header {...props}/>);

class Header extends Component{
  constructor(){
    super();
  }
  onPush_account_handler = () => {
    this.props.history.push('/app/profile')
    this.props.change_menu_handler('profile')
  }
  onPush_Swipe_handler = () => {
    this.props.history.push('/app/recs')
    this.props.change_menu_handler('recs')
  }
  onPush_Matches_handler = () => {
    this.props.history.push('/app/matches')
    this.props.change_menu_handler('matches')
  }
  render(){
    console.log(this.props.menu_state)
    return(
      <div>
        <div  className="App-header">
            <div onClick={this.onPush_account_handler} className={"Header-icon account-mark " + (this.props.menu_state==='profile'?'on-':'off-') + "account_icon"} />
            <div onClick={this.onPush_Swipe_handler} className={"Header-icon mark-mark " + (this.props.menu_state==='recs'?'on-':'off-') + "mark_icon"} />
            <div onClick={this.onPush_Matches_handler} className={"Header-icon matches-mark " + (this.props.menu_state==='matches'?'on-':'off-') + "matches_icon"} />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);