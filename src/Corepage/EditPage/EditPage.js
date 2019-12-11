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

const translate_category_name = {
  'japanese': '日本人',
  'mature': '熟女',
  'anal': 'アナル',
  'babe': '純愛系',
  'amateur': '素人',
  'threesome': '3P',
  'MLF': '中年女性',
  'lesbian': 'レズ',
  'teen': '十代',
  'big-tits': '巨乳',
  'popular-with-women': '女性に人気',
  'verifined-models': '公式モデル',
  '60FPS': '高品質動画',
  'arab': 'アラブ系',
  'asian': 'アジア系',
  'BBW': 'デブ専',
  'babysitter': 'ベビーシッター',
  'behind the scenes': '制作中',
  'big ass': '巨尻',
  'big dick': '巨根',
  'bisexual-male': 'バイセクシャル',
  'blonde': 'ブロンド髪',
  'blowjob': 'フェラ',
  'bondage': 'ボンテージ',
  'brazilian': 'ブラジル人',
  'british': 'イギリス人',
  'brunette': '黒髪',
  'bukkake': 'ぶっかけ',
  'cartoon': 'アニメ',
  'casting': 'AV面接',
  'celebrity': 'セレブ',
  'closed captions': '字幕付き',
  'college': '大学',
  'compilation': '編集',
  'cosplay': 'コスプレ',
  'creampie': '中出し',
  'cuckold': '浮気',
  'cumshot': 'ぶっかけ',
  'czech': 'チェコ人',
  'described video': 'ナレーション付き',
  'ebony': '黒人',
  'euro': 'ヨーロッパ系',
  'exclusive': '独占映像',
  'fingering': '手マン',
  'fisting': 'フィストプレイ',
  'french': 'フランス人',
  'funny': '面白系',
  'gangbang': '輪姦',
  'german': 'ドイツ系',
  'handjob': '手コキ',
  'hardcore': '激しいプレイ',
  'HD Porn': '高画質',
  'Hentai': '日本アニメ',
  'indian': 'インド人',
  'interactive': '遠隔玩具',
  'korean': '韓国人',
  'latina': 'ラテン人',
  'massage': 'マッサージ系',
  'masturbation': 'オナニー',
  'music': '音楽',
  'Old/Young': '年の差',
  'Orgy': '乱交',
  'parody': 'パロディ',
  'party': 'パーティー',
  'pissing': '放尿',
  'pornstar': 'ポルノ俳優',
  'public': '青姦',
  'pussy licking': 'クンニ',
  'reality': 'リアル',
  'red-head': '赤髪',
  'role-play': 'ロールプレイ',
  'school': '校内',
  'scissoring': '貝合わせ',
  'sfw': '仕事中でも見れる',
  'smallTits': '貧乳',
  'smoking': '喫煙',
  'solo female': '一人プレイ',
  'squirt': '潮吹き',
  'strap-on': 'ペニバン',
  'striptease': 'ストリップ',
  'tattooed-women': 'タトゥー',
  'teen': '10代',
  'toys': '玩具プレイ',
  'transgender': 'トランスジェンダー',
  'vintage': 'ビンテージ映像',
  'webcam': 'ウェブカメラ'
}

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