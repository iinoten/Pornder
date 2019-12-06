import React, {Component} from 'react';

import './SuperLikeAlert.css'

class SuperLikeAlert extends Component{
  constructor(){
    super();
  }
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
        <h4 className="yet_alert-text">SuperLike機能はこれから実装予定</h4>
        <div className="SuperLikeAlert-Icon"><div className="gray_back" /></div>
      </div>
    );
  }
}

export default SuperLikeAlert;