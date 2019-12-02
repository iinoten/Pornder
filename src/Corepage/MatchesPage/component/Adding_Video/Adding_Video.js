import React, {Component} from 'react';
import image from './image/lording_imge.png';
import './Adding_Video.css'

class Adding_Video extends Component{
  constructor(){
    super();
    this.state = {
    }
  }
  render(){
    console.log(this.props.head_img)
    const image_url = this.props.head_img
    return(
      <div className="Adding_Video">
        <img className="Head-icon" src={this.props.head_img} style={{backgroundImage: `url(${image})`}} />
        {this.props.test}
      </div>
    );
  }
}

export default Adding_Video;