import React, {Component} from 'react';
import posed from 'react-pose';
import './AppPageGuide.css'

const Box = posed.div({
  up: {
    top: '20%',
    transition: {
      type: 'spring',
    }
  },
  down: {
    top: '-100%',
    transition: {
      type: 'spring',
    }
  }
})

class AppPageGuide extends Component{
  constructor() {
    super();
    this.state = {
      is_popup: false
    }
  }
  componentDidMount () {
    setInterval(()=>{
      this.setState({ is_popup: !this.state.is_popup})
    }, 1000)
  }
  render(){
    return(
      <Box className='AppPageGuide' pose={this.state.is_popup?'up':'down'}>
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
      </Box>
    );
  }
}

export default AppPageGuide;