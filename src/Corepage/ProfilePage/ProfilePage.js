import React, {Component} from 'react';

import './ProfilePage.css'

class ProfilePage extends Component{
  render(){
    return(
      <div className="ProfilePage">
        <div className="Main-icon" />
        <div className="Setting_buttons">
          <button className="EditButton Config" />
          <button className="EditButton Info" />
        </div>
        <div><button className="Add-clip-Button"><div className="Mini_mark"/></button></div>
        <div className="Functional_Buttons">
          <button className="Boost-button SubButton In_ProfilePage" />
          <button className="Superlike-button SubButton In_ProfilePage" />
        </div>
      </div>
    );
  }
}

export default ProfilePage;