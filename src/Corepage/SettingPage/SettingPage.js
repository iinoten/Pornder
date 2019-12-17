import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './SettingPage.css'

class SettingPage extends Component{
  constructor(){
    super();
    this.state = {
      recomended_categories: []
    }
  }
  onPush_Done_button_handler = () => {
    this.props.setHeader()
    this.props.history.push('/app/profile')
  }
  render(){
    return(
      <div className='SettingPage'>
        <div className='SettingPage-Header'>
          <div className='SettingPage-Header_Title'>設定</div>
          <button className='SettingPage-Header_backbutton' onClick={this.onPush_Done_button_handler}>完了</button>
        </div>
        <div className='SettingPage_Subscription_Banner'>
          <h4><div className='Fire-icon'/>porn<span className='title-der'>der</span></h4>
          <h5>サブスクリプションなんて ありません</h5>
        </div>
        <div className='SettingPage-moreTools'>
          <div className="SettingPage-SuperLike">
            <div className="SettingPage-SuperLike-Icon" />
            <h4 className="SettingPage-SuperLike-text">残り <span>∞</span></h4>
          </div>
          <div className="SettingPage-Boost">
            <div className="SettingPage-Boost-Icon" />
            <h4 className="SettingPage-Boost-text">残り <span>∞</span></h4>
          </div>
        </div>
          <div className='SettingPage_Comunity-Guide'>
            <h4>コミュニティ</h4>
            <div className='SettingPage-Menu'>
              <div className='SettingPage-Menu-Wording'><a rel="noopener noreferrer" href='https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%8A%E3%83%8B%E3%83%BC' target='__blank'>安全に使うためのコツ</a><div className='SettingPage-Menu_Popup-Icon'/></div>
              <div className='SettingPage-Menu-Wording'><a rel="noopener noreferrer" href='https://note.com/ntenten_q/n/nf54258a87c36' target='__blank'>pornder プライバシーポリシー</a><div className='SettingPage-Menu_Popup-Icon'/></div>
              <div className='SettingPage-Menu-Wording'><a rel="noopener noreferrer" href='https://jp.pornhub.com/information#terms' target='__blank'>pornhub 利用規約</a><div className='SettingPage-Menu_Popup-Icon'/></div>
            </div>
            <div className='SettingPage-Footer'>
              <div className='SettingPage-Footer_image' />
              <div className='SettingPage-Footer_Version'>バージョン 1.0.0</div>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(SettingPage);