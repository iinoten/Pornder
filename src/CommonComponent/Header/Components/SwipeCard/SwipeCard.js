import React, {Component} from 'react';

import './SwipeCard.css'

class SwipeCard extends Component{
  render(){
    return(
      <div className="Card">
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