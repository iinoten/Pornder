import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './MatchesPage.css'
import Adding_Video from './component/Adding_Video/Adding_Video';

const test_data = [];
const test_matches_persons = [1,2,3,4,5,6,7,8,9]
class MatchesPage extends Component{
  render(){
    return(
      <TransitionGroup>
        <CSSTransition key={Math.random} classNames='fade' timeout={2000}>
           <div className="MatchesPage">
            <div className="favorites_users">
              <h5 className="New-tube-title">新しい動画</h5>
              <ul className="horizontal-list">
                <li className="item">
                  <div className="New-Clip-icon"></div>
                </li>
                {test_matches_persons.map((item) => (
                  <li className="item">
                    <div className="Like-Persons"></div>
                  </li>
                ))}
              <h5 className="matched-title mijissou">ここは未実装です</h5>
              </ul>
            </div>
            <div className="match-movies">
              <h5 className="matched-title">マッチした動画</h5>
              {
                this.props.like_videoes.map(item => (
                  <Adding_Video head_img={item.thumb} title={item.title} views={item.views} ratign={item.rating}/>
                ))
              }
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default MatchesPage;