import React, {Component} from 'react';

import './MatchesPage.css'
import Adding_Video from './component/Adding_Video/Adding_Video';

const test_data = [];
const test_matches_persons = [1,2,3,4,5,6,7,8,9]
class MatchesPage extends Component{
  render(){
    return(
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
          </ul>
        </div>
        <div className="match-movies">
          <h5 className="matched-title">マッチした動画</h5>
          <Adding_Video head_img={'https://ci.phncdn.com/videos/201910/31/258477242/original/(m=e0YHGgaaaa)(mh=SB6Y_qD6E4asab8I)3.jpg'} test="test"/>
          <Adding_Video head_img={'https://ci.phncdn.com/videos/201910/31/258477242/original/(m=e0YHGgaaaa)(mh=SB6Y_qD6E4asab8I)3.jpg'} test="test"/>
          <Adding_Video head_img={'https://ci.phncdn.com/videos/201910/31/258477242/original/(m=e0YHGgaaaa)(mh=SB6Y_qD6E4asab8I)3.jpg'} test="test"/>
          <Adding_Video head_img={'https://ci.phncdn.com/videos/201910/31/258477242/original/(m=e0YHGgaaaa)(mh=SB6Y_qD6E4asab8I)3.jpg'} test="test"/>
          <Adding_Video head_img={'https://ci.phncdn.com/videos/201910/31/258477242/original/(m=e0YHGgaaaa)(mh=SB6Y_qD6E4asab8I)3.jpg'} test="test"/>
          <Adding_Video head_img={'https://ci.phncdn.com/videos/201910/31/258477242/original/(m=e0YHGgaaaa)(mh=SB6Y_qD6E4asab8I)3.jpg'} test="test"/>
        </div>
      </div>
    );
  }
}

export default MatchesPage;