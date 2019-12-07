import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './NotFound.css'

class NotFound extends Component{
  componentWillMount() {
    setTimeout(()=>this.props.history.push('/app/recs'), 2000)
  }
  render(){
    return(
      <div className="NotFound">
        <h2 className="notfound-text">404</h2>
        <h4 className="notfound-subtext">スワイプページに移動します</h4>
      </div>
    );
  }
}

export default withRouter(NotFound);