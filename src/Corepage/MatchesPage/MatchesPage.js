import React, {Component} from 'react';

import './MatchesPage.css'

const test_data = [];
const test_matches_persons = [1,2,3,4,5,6,7,8,9]
class MatchesPage extends Component{
  render(){
    return(
      <div>
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
      </div>
    );
  }
}

export default MatchesPage;