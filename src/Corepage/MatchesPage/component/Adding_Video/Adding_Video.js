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
  onClick_Delete_Button_handler = () => {
    this.props.onDelete(this.props.video_index)
  }
  render(){
    console.log()
    return(
      <div className="Adding_video-Box">
        <a target='_blank' rel="noopener noreferrer" href={this.props.url} className="Adding_Video">
          <img alt="えっちなアイコン" className="Head-icon" src={this.props.head_img} style={{backgroundImage: `url(${image})`}} />
          <div className="Video-description">
            <p className="Video-Title">{this.props.title.slice(0,25) + (this.props.title.slice(25) ? '...':'')}</p>
            {this.state.is_HD? <div className="HD-mark">HD</div>:null}
            <div>
              <p className="Video-views">{Math.floor(this.props.views/ 1000)}K 再生数</p>
              <p className="Good-icon"/>
              <p className="Eval-rate">{this.props.rating}%</p>
            </div>
          </div>
        </a>
        <div className='Delete-Button' onClick={this.onClick_Delete_Button_handler} />
      </div>
    );
  }
}

export default Adding_Video;