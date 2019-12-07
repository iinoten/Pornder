import React, {Component} from 'react';

import './ForPC.css'

class ForPC extends Component{
  render(){
    return(
      <div className="ForPC">
        <div className="ForPC-Icon"/>
        <div className="ForPC-Text"><h4>PCからはまだ利用できません。スマホで開いてください。</h4></div>
      </div>
    );
  }
}

export default ForPC;