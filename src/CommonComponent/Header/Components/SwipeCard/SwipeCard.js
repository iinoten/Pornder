import React, {Component} from 'react';

import './SwipeCard.css'
import RecomendedGuide from '../RecomendedGuide/RecomendedGuide';
import Cookie from 'js-cookie';

class SwipeCard extends Component{
  constructor() {
    super();
    this.state = {
      is_alert: false,
      popup_recomended: null
    }
  }

  componentDidMount() {
    if( this.props.recomended ) { 
      if(!Cookie.get('DEMO_popup_recomended')) {
        this.setState({ 
            is_alert: true,
            popup_recomended: <RecomendedGuide popdown={this.down_popup} open={this.state.is_alert}/>
          }) 
        }
    }
  }
  down_popup = () => {
    //setTimeout(()=>this.setState({alert: null}), 1000);
    Cookie.set('DEMO_popup_recomended', 1)
    this.setState({ is_alert: false })
  }
  onClick_card_handler = (event) => {
    if(Math.floor(event.nativeEvent.offsetX/(window.parent.screen.width*0.9)*100) >=50) {
      //右端をタップ
      console.log('Tap right side')
    } else if(Math.floor(event.nativeEvent.offsetX/(window.parent.screen.width*0.9)*100) <=51) {
      //左端をタップ
      console.log('Tap left side')
    }
  }
  render(){
    return(
      <div className="Card" onClick={this.onClick_card_handler}>
        <RecomendedGuide open={this.state.is_alert} popdown={this.down_popup} />
        {this.props.recomended?<span className="Recomended-tag"><h3>Recomended!</h3></span>:null}
        {this.props.img_src?<img alt="エッチなサムネ" className="Card_image" src={this.props.img_src} />:null}
        <div className="Card-description">
          <h5 className="Video-title">{this.props.Video_title}</h5>
          { this.props.rating ?
          <div className="Card-Sub-descripntion">
            <p className="Card-Good_icon"/><p className="Card-Eval-rate">{this.props.rating}%</p>
          </div>
          : null}
        </div>
      </div>
    );
  }
}

export default SwipeCard;