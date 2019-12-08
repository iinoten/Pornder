import React, {Component} from 'react';

import './AppPageGuide.css'

class AppPageGuide extends Component{
  render(){
    return(
      <div className='AppPageGuide'>
        <h1 className='AppPageGuide-Title'>この画面について</h1>
        <div className='AppPageGuide-if-like'>
          <h4 className='AppPageGuide-if-like_Title'>カードが気に入ったら</h4>
          <div className='AppPageGuide-if-like_desription'>
            <h5 className='right-swipe'>カードを右にスワイプ</h5>
            <h6>もしくは</h6>
            <h5 className='right-tap'><div className='AppPageGuide-if-like_Icon' /><span>Likeボタンをタップ</span></h5>
          </div>
        </div>

        <div className='AppPageGuide-if-dislike'>
          <h4 className='AppPageGuide-if-dislike_Title'>カードが気に入らなかったら</h4>
          <div className='AppPageGuide-if-dislike_desription'>
            <h5 className='left-swipe'>カードを左にスワイプ</h5>
            <h6>もしくは</h6>
            <h5 className='left-tap'><div className='AppPageGuide-if-dislike_Icon' /><span>DisLikeボタンをタップ</span></h5>
          </div>
        </div>
        <div className='AppPageGuide-OK'>OK</div>
      </div>
    );
  }
}

export default AppPageGuide;