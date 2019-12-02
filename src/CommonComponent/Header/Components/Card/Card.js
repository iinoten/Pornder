import React, {Component} from 'react';
import Good_icon from './Good_icon.png'

import './Card.css'

class Card extends Component{
  render(){
    console.log(this.props.children)
    const image = this.props.img_src
    return(
      <div className="Card">
        <img className="Card_image" src={this.props.img_src} />
        <div className="Card-description">
          <h5 className="Video-title">{this.props.Video_title}</h5>
          <div className="Card-Sub-descripntion">
            <p className="Card-Good_icon"/><p className="Card-Eval-rate">80%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;