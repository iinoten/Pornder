import React, {Component} from 'react';
import Good_icon from './Good_icon.png'

import './SwipeCard.css'

class SwipeCard extends Component{
  constructor(props) {
    super(props)
    this.state = {
      image: null
    }
  }
  componentWillReceiveProps(props){
    this.setState({ image: <img className="Card_image" src={props.img_src} /> })
  }
  render(){
    return(
      <div className="Card">
        <img className="Card_image" src={this.props.img_src} />
        <div className="Card-description">
          <h5 className="Video-title">{this.props.Video_title}</h5>
          <div className="Card-Sub-descripntion">
            <p className="Card-Good_icon"/><p className="Card-Eval-rate">{this.props.rating}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SwipeCard;