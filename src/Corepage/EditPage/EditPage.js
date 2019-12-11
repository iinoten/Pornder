import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './EditPage.css'

const recomended_categories = [
  'japanese',
  'mature',
  'anal',
  'babe',
  'amateur',
  'threesome',
  'MLF',
  'lesbian'
]

class EditPage extends Component{
  constructor(){
    super();
  }
  onPush_Done_button_handler = () => {
    this.props.setHeader()
    this.props.history.push('/app/profile')
  }
  render(){
    return(
      <div className='EditPage'>
        <div className='EditPage-Header'>
          <div className='EditPage-Header_Title'>情報の編集</div>
          <button className='EditPage-Header_backbutton' onClick={this.onPush_Done_button_handler}>完了</button>
        </div>
        <div className='EditPage-recomended-categories'>
          <h4 className='EditPage_Description'>これが今、あなたにオススメしているカテゴリです</h4>
          <table className='EditPage-recomended_category-table'>
            <tbody>
              <tr>
                {recomended_categories.map((item, i) => {
                  if(i<=2) return <td className='EditPage-recomended_category'>{item}</td>
                })}
              </tr>
              <tr>
                {recomended_categories.map((item, i) => {
                  if(i>=3&&i<=5) return <td className='EditPage-recomended_category'>{item}</td>
                })}
              </tr>
              <tr>
                {recomended_categories.map((item, i) => {
                  if(i>=6&&i<=8) return <td className='EditPage-recomended_category'>{item}</td>
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(EditPage);