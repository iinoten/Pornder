import React, {Component} from 'react';

import './ProfilePage.css'

class ProfilePage extends Component{
  constructor() {
    super();
  }
  onPush_Boost_Button_handler = () => {
    this.props.popup_yet_alert()
  }
  onPush_SuperLike_Button_handler = () => {
    this.props.popup_yet_alert();
  }
  onPush_YET_setting_button = () => {
    this.props.popup_yet_alert();
  }
  render(){
    return(
      <div className="ProfilePage">
        <div className="Main-icon" />
        <div className="Setting_buttons">
          <button onClick={this.onPush_YET_setting_button} className="EditButton Config" />
          <button onClick={this.onPush_YET_setting_button} className="EditButton Info" />
        </div>
        <div><button className="Add-clip-Button"><div className="Mini_mark"/></button></div>
        <div className="Functional_Buttons">
          <button onClick={this.onPush_Boost_Button_handler} className="Boost-button SubButton In_ProfilePage" />
          <button onClick={this.onPush_SuperLike_Button_handler} className="Superlike-button SubButton In_ProfilePage" />
        </div>
      </div>
    );
  }
}

export default ProfilePage;