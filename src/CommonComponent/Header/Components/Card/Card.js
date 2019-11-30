import React, {Component} from 'react';

import './Card.css'

class Card extends Component{
  render(){
    const image = this.props.img_src
    return(
      <div className="Card" style={{backgroundImage: 'url("'+ this.props.img_src +'")'}}>
        {}
      </div>
    );
  }
}

export default Card;