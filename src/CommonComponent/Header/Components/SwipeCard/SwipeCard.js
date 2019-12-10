import React, {Component} from 'react';

import './SwipeCard.css'
import RecomendedGuide from '../RecomendedGuide/RecomendedGuide';

class SwipeCard extends Component{
  constructor() {
    super();
    this.state = {
      alert: <RecomendedGuide popdown={this.down_popup} />
    }
  }
  componentDidMount() {
    if( this.props.recomended ) { this.setState({ alert: <RecomendedGuide popdown={this.down_popup} />}) }
  }
  down_popup = () => {
    setTimeout(()=>this.setState({alert: null}), 1000)
  }
  render(){
    return(
      <div className="Card">
        {this.state.alert}
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