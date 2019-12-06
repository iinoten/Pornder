import React, {Component} from 'react';

import './SuperLikeAlert.css'

class SuperLikeAlert extends Component{
  componentDidMount(){
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if(this.props.is_open){ this.props.popdown_yet_alert() }
  }
  render(){
    return(
      <div className="SuperLikeAlert">
        <h4 className="yet_alert-text">この機能はこれから実装予定</h4>
        <h6 className="yet_alert-subtext">実はどんな機能をくっつけるかも考えれてないかも</h6>
        <div className="SuperLikeAlert-Icon"><div className="gray_back" /></div>
      </div>
    );
  }
}

export default SuperLikeAlert;