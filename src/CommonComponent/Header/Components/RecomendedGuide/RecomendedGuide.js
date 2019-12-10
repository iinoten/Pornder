import React, {Component} from 'react';
import posed from 'react-pose';
import Cookie from 'js-cookie'
import './RecomendedGuide.css'

const Box = posed.div({
  up: {
    top: '20%',
    transition: {
      type: 'spring',
    }
  },
  down: {
    top: '-1000%',
    transition: {
      type: 'spring',
    }
  }
})

class RecomendedGuide extends Component{
  constructor() {
    super();
    this.state = {
      is_popup: false
    }
  }
  onClick_OK_Button = () => {
    this.setState({is_popup: false})
    this.pop_down();
  }
  pop_down = () => {
    this.props.popdown()
  }
  render(){
    return(
      <Box className='RecomendedGuide' pose={this.props.open?'up':'down'}>
          <h1 className='RecomendedGuide-Title'>おめでとうございます！</h1>
          <h4 className='RecomendedGuide-description'><span>Pornder</span>をご利用くださりありがとうございます! あなたのライクを
            元におすすめの動画を表示できるようになりました。
          </h4>
          <h4 className='RecomendedGuide-description'>
            <span className="Guide-Recomended-tag">Recomended!</span>はあなたがライクした動画のカテゴリを元に表示されたオススメ動画です!
          </h4>
          <div onClick={this.onClick_OK_Button} className='RecomendedGuide-OK'>OK</div>
      </Box>
    );
  }
}

export default RecomendedGuide;