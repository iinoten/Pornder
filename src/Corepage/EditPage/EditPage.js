import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './EditPage.css'
import Cookie from 'js-cookie';

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
  '60fps-1': '高品質動画',
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
    this.state = {
      recomended_categories: []
    }
  }
  onPush_Done_button_handler = () => {
    this.props.setHeader()
    this.props.history.push('/app/profile')
  }
  count_categories_array = () => {
    let categories_array = JSON.parse(Cookie.get('like_types')).categories;
    let dict = {};
    for(let key of categories_array){
        dict[key] = categories_array.filter((x)=>{return x==key}).length;
    }
    let dict_array = [{public: 1}]
    for (let key in dict) {
      if(dict_array[0]) { 
        dict_array[0][Object.keys(dict_array[0])] <= dict[key] ? dict_array.unshift({[key]: dict[key]}) : dict_array.push({[key]: dict[key]})
      } else {
        dict_array.push({[key]: dict[key]})
      }
    }
    /*
    Object.keys(dict).forEach((key)=>{
      dict_array.push({[key]: dict[key]})
    })
    */
   let return_categories = []
   for (let i = 0; i < dict_array.length; i++) {
     return_categories.unshift(Object.keys(dict_array[i])[0])
   }
    return return_categories.splice(0,9);
  }
  componentDidMount(){
    console.log(this.count_categories_array())
    this.setState({recomended_categories: this.count_categories_array()})
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
                {this.state.recomended_categories.map((item, i) => {
                  if(i<=2) return <td className='EditPage-recomended_category'>{translate_category_name[item]?translate_category_name[item]:item}</td>
                })}
              </tr>
              <tr>
                {this.state.recomended_categories.map((item, i) => {
                  if(i>=3&&i<=5) return <td className='EditPage-recomended_category'>{translate_category_name[item]?translate_category_name[item]:item}</td>
                })}
              </tr>
              <tr>
                {this.state.recomended_categories.map((item, i) => {
                  if(i>=6&&i<=8) return <td className='EditPage-recomended_category'>{translate_category_name[item]?translate_category_name[item]:item}</td>
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