import React, {Component} from 'react';

import './SwipeCard.css'
import RecomendedGuide from '../RecomendedGuide/RecomendedGuide';
import Cookie from 'js-cookie';

class SwipeCard extends Component{
  constructor(props){
    super(props)
    this.state = {
      is_alert: false,
      popup_recomended: null,
      thumbs_img: (this.props.img_src?[this.props.img_src, ...this.props.thumbs]:null),
      viewing_img_num: 0
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
    if(this.state.thumbs_img) {
      if(Math.floor(event.nativeEvent.offsetX/(window.parent.screen.width*0.9)*100) >=50) {
        //右端をタップ
        this.setState((plevstate)=>{
          if(plevstate.viewing_img_num<this.state.thumbs_img.length) {
            return {viewing_img_num: plevstate.viewing_img_num+1}
          }
        })
      } else if(Math.floor(event.nativeEvent.offsetX/(window.parent.screen.width*0.9)*100) <=51) {
        //左端をタップ
        this.setState((plevstate)=>{
          if(plevstate.viewing_img_num>0) {
            return {viewing_img_num: plevstate.viewing_img_num-1}
          }
        })
      }
    }
  }
  render(){
    return(
      <div className="Card" onClick={this.onClick_card_handler}>
        <RecomendedGuide open={this.state.is_alert} popdown={this.down_popup} />
        { this.state.thumbs_img ?
          <div className='ThumbsStickies'>
            {
              this.state.thumbs_img.map((item, index)=>{
                if(index === this.state.viewing_img_num) {
                  return <div className='ThumbsSticky active-thumb' style={{width: ((window.parent.screen.width*0.9)/this.state.thumbs_img.length-2)+'px'}}/>
                } else {
                    return <div className='ThumbsSticky negative-thumb' style={{width: ((window.parent.screen.width*0.9)/this.state.thumbs_img.length-2)+'px'}}/>
                }
              })
            }
          </div>
          :
          null
        }
        {this.props.recomended?<span className="Recomended-tag"><h3>Recomended!</h3></span>:null}
        {this.props.img_src?<img alt="エッチなサムネ" className="Card_image" src={this.state.thumbs_img[this.state.viewing_img_num]}/>:null}
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