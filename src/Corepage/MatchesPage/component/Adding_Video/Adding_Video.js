import React, {Component} from 'react';
import image from './image/lording_imge.png';
import './Adding_Video.css'

class Adding_Video extends Component{
  constructor(){
    super();
    this.state = {
      is_HD: true
    }
  }
  render(){
    console.log(this.props.head_img)
    const image_url = this.props.head_img
    return(
      <div className="Adding_Video">
        <img className="Head-icon" src={this.props.head_img} style={{backgroundImage: `url(${image})`}} />
        <div className="Video-description">
          <p className="Video-Title">Sexy Snapchat Girl</p>
          {this.state.is_HD? <div className="HD-mark">HD</div>:null}
          <div>
            <p className="Video-views">{183}K 再生数</p>
            <p className="Good-icon"/>
            <p className="Eval-rate">{80}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Adding_Video;