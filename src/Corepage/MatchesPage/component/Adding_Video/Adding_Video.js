import React, {Component} from 'react';
import image from './image/lording_imge.png';
import './Adding_Video.css'

class Adding_Video extends Component{
  constructor(){
    super();
    this.state = {
      is_HD: false
    }
  }
  render(){
    return(
      <a target='_blank' href='https://www.google.com/search?q=js+%E8%A6%81%E7%B4%A0+%E3%82%AF%E3%83%A9%E3%82%B9+%E5%8F%96%E5%BE%97&oq=js+%E8%A6%81%E7%B4%A0+%E3%82%AF%E3%83%A9%E3%82%B9+%E5%8F%96%E5%BE%97&aqs=chrome..69i57j0.5309j0j4&sourceid=chrome&ie=UTF-8' className="Adding_Video">
        <img className="Head-icon" src={this.props.head_img} style={{backgroundImage: `url(${image})`}} />
        <div className="Video-description">
          <p className="Video-Title">{this.props.title}</p>
          {this.state.is_HD? <div className="HD-mark">HD</div>:null}
          <div>
            <p className="Video-views">{Math.floor(this.props.views/ 1000)}K 再生数</p>
            <p className="Good-icon"/>
            <p className="Eval-rate">{this.props.rating}%</p>
          </div>
        </div>
      </a>
    );
  }
}

export default Adding_Video;