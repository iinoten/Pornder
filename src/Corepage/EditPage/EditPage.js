import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './EditPage.css'

class EditPage extends Component{
  constructor(){
    super();
  }
  onPush_Done_button_handler = () => {
    this.props.setHeader()
    this.props.history.push('/app/profile')
  }
  render(){
    return(
      <div className='EditPage'>
        <div className='EditPage-Header'>
          <div className='EditPage-Header_Title'>情報の編集</div>
          <button className='EditPage-Header_backbutton' onClick={this.onPush_Done_button_handler}>完了</button>
        </div>
      </div>
    );
  }
}

export default withRouter(EditPage);