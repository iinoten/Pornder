import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MediaQuery from 'react-responsive';
import AppPage from './Corepage/AppPage/AppPage';
import Header from './CommonComponent/Header/Header';
import ProfilePage from './Corepage/ProfilePage/ProfilePage';
import MatchesPage from './Corepage/MatchesPage/MatchesPage';
import axios from 'axios';
import Cookies from 'js-cookie'

import React, {Component} from 'react';

import './App.css'

import posed from 'react-pose'
import SuperLikeAlert from './CommonComponent/Header/Components/SuperLikeAlert/SuperLikeAlert';
import NotFound from './Corepage/NotFound/NotFound';
import ForPC from './Corepage/ForPC/ForPC';
import EditPage from './Corepage/EditPage/EditPage';
import SettingPage from './Corepage/SettingPage/SettingPage';

const SuperLikeBox = posed.div({
  open: {
    top: '50%'
  },
  close: {
    top: '-50%'
  }
})

const all_video_genre = [
  'japanese',
  'mature',
  'anal',
  'babe',
  'amateur',
  'threesome',
  'MLF',
  'lesbian',
  'teen',
  'big-tits',
  'popular-with-women',
  'verifined-models',
  '60FPS',
  'arab',
  'asian',
  'bBW',
  'babysitter',
  'behind-the-scenes',
  'big-ass',
  'big-dick',
  'bisexual-male',
  'blonde',
  'blowjob',
  'bondage',
  'brazilian',
  'british',
  'brunette',
  'bukkake',
  'cartoon',
  'casting',
  'celebrity',
  'closed-captions',
  'college',
  'compilation',
  'cosplay',
  'creampie',
  'cuckold',
  'cumshot',
  'czech',
  'described-video',
  'ebony',
  'euro',
  'exclusive',
  'fingering',
  'fisting',
  'french',
  'funny',
  'gangbang',
  'german',
  'handjob',
  'hardcore',
  'HD Porn',
  'Hentai',
  'indian',
  'interective',
  'korean',
  'latina',
  'massage',
  'masturbation',
  'music',
  'Old/Young',
  'Orgy',
  'parody',
  'party',
  'pissing',
  'pornstar',
  'public',
  'pussy-licking',
  'reality',
  'red-head',
  'role-play',
  'school',
  'scissoring',
  'sfw',
  'smallTits',
  'smoking',
  'solo-female',
  'squirt',
  'strap-on',
  'striptease',
  'tattooed-women',
  'teen',
  'toys',
  'transgender',
  'vintage',
  'webcam'
]


class App extends Component{
  constructor() {
    super();
    this.state = {
      menu_state: 'recs',
      like_videoes: [],
      test_value: [1,2,3,4],
      cards: [],
      swipe_count: 0,
      is_open_yet_Alert: false,
      is_header: true
    }
  }
  add_like_video = (video) => {
    this.setState(prevState => {
      let temp_video_state = prevState.like_videoes;
      temp_video_state.unshift(video);
      return {like_videoes: temp_video_state}
    })
   //this.setState({like_videoes: this.state.like_videoes.concat(video)})
   this.update_cards_state()
  }
  set_header = () => {
    this.setState({is_header: true})
  }
  remove_header = () => {
    this.setState({is_header: false})
  }
  popup_yet_alert = () => this.setState({ is_open_yet_Alert: true });
  popdown_yet_alert = () => this.setState({ is_open_yet_Alert: false });

  first_update_state = () => {
    const GET_VIDEO_FROM_CATEGORY = 'https://stark-dusk-66489.herokuapp.com/c/';
          axios.get(GET_VIDEO_FROM_CATEGORY, {params: {category: all_video_genre[Math.floor(Math.random() * all_video_genre.length)]}})
            .then((res) => {
              this.setState(prevState => {
                let temp_card_array = prevState.cards;
                temp_card_array.push(res.data)
                return { cards: temp_card_array}
              })
            })
            .catch(err => console.log("えらーー", err))
  }
  update_cards_state = () => {
    this.setState(prev_card => {
      let temp_cards =  prev_card.cards;
      temp_cards.shift();
      return {cards: temp_cards}
    })
    if(this.state.swipe_count <= 2) {
      this.setState({swipe_count: 5})
      for (let index = 0; index < 5; index++) {
        const GET_VIDEO_FROM_CATEGORY = 'https://stark-dusk-66489.herokuapp.com/c/';
        if(Cookies.get('like_types') && (JSON.parse(Cookies.get('like_types')).categories.length > 30)){
          switch (Math.floor(Math.random() * 4)) {
            case 0:
              axios.get(GET_VIDEO_FROM_CATEGORY, {params: {category: JSON.parse(Cookies.get('like_types')).categories[Math.floor(Math.random() * JSON.parse(Cookies.get('like_types')).categories.length)]}})
              .then((res) => {
                this.setState(prevState => {
                  let temp_card_array = prevState.cards;
                  let temp_card_data = res.data;
                  temp_card_data.recomended = true;
                  temp_card_array.push(temp_card_data)
                  return { cards: temp_card_array}
                })
              })
              .catch(err => console.log("えらーー", err))
              break;
          
            default:
              axios.get(GET_VIDEO_FROM_CATEGORY, {params: {category: all_video_genre[Math.floor(Math.random() * all_video_genre.length)]}})
              .then((res) => {
                this.setState(prevState => {
                  let temp_card_array = prevState.cards;
                  temp_card_array.push(res.data)
                  return { cards: temp_card_array}
                })
              })
              .catch(err => console.log("えらーー", err))
              break;
          }
        } else {
          axios.get(GET_VIDEO_FROM_CATEGORY, {params: {category: all_video_genre[Math.floor(Math.random() * all_video_genre.length)]}})
          .then((res) => {
            this.setState(prevState => {
              let temp_card_array = prevState.cards;
              temp_card_array.push(res.data)
              return { cards: temp_card_array}
            })
          })
          .catch(err => console.log("えらーー", err))
        }
      }
    } else {
      this.setState({swipe_count: this.state.swipe_count - 1})
    }
  }
  change_menu = (type) => {
    this.setState({ menu_state: type})
  }
  componentDidMount () {

    switch (window.location.pathname) {
      case '/app/profile':
        this.setState({ menu_state: 'profile'})
        break;
      case '/app/recs':
        this.setState({ menu_state: 'recs' })
        break;
      case '/app/matches':
        this.setState({ menu_state: 'matches' })
        break;
      case '/app/profile/edit':
        this.setState({ is_header: false })
        break
      case '/app/settings':
        this.setState({ is_header: false })
        break
      default:
        break;

      }
      const GET_VIDEO_FROM_CATEGORY = 'https://stark-dusk-66489.herokuapp.com/c/';
      axios.get(GET_VIDEO_FROM_CATEGORY, {params: {category: all_video_genre[Math.floor(Math.random() * all_video_genre.length)]}})
      .then((res) => {
        this.setState(prevState => {
          let temp_card_array = prevState.cards;
          temp_card_array.push(res.data)
          return { cards: temp_card_array}
        })
      })
      .catch(err => console.log("えらーー", err))
    //Cookieからlikeしたやつをとってくる
    if(Cookies.get().DEMO_like_videoes){
      this.setState({
        like_videoes: JSON.parse(Cookies.get().DEMO_like_videoes)
      })
    }
  }
  set_Like_videoes_Cookie = (videoes) => {
    Cookies.set('DEMO_like_videoes', JSON.stringify([videoes, ...this.state.like_videoes]))
    let old_types = ( Cookies.get('like_types') ? JSON.parse(Cookies.get('like_types')) : null)
    //let old_categories = (Cookies.get('like_types') ? JSON.parse(Cookies.get('like_types').categories : null)
    let like_type = {
      categories: (Cookies.get('like_types') ? [...old_types.categories, ...videoes.types.categories] : videoes.types.categories),
      tags: (Cookies.get('like_types') ? [...old_types.tags, ...videoes.types.tags] : videoes.types.tags)
    }
    if(old_types) {
      if(like_type.categories.length > 35) {
        like_type.categories.splice(0, videoes.types.categories.length)
      }
      if(like_type.tags.length > 10) {
        old_types.tags.splice(0, videoes.types.length)
      }
    }
    Cookies.set('like_types', JSON.stringify(like_type))
    let return_types = {};
    for(var i=0;i< JSON.parse(Cookies.get('like_types')).categories.length;i++) {
      let key = JSON.parse(Cookies.get('like_types')).categories[i];
      return_types[key] = (return_types[key])? return_types[key] + 1 : 1 ;
    }
  }
  onDelete_video_handler = (index) => {
    this.setState(prevState => {
      let temp_state = prevState.like_videoes;
      temp_state.splice(index, 1)
      Cookies.set('DEMO_like_videoes', JSON.stringify(temp_state))
      return {like_videoes: temp_state}
    })
  }
  render(){
    return (
      <div>
        <MediaQuery query="(max-width: 767px)">
        <BrowserRouter>
          <div className='App'>
          {this.state.is_header?<Header menu_state={this.state.menu_state} change_menu_handler={this.change_menu}/>:null}
            <Switch>
              <Route path='/app/profile' exact component={()=><ProfilePage removeHeader={this.remove_header} popup_yet_alert={this.popup_yet_alert} />} />
                <Route path='/app/profile/edit' component={()=><EditPage setHeader={this.set_header}  />} />
                <Route path='/app/settings' component={()=><SettingPage setHeader={this.set_header}  />} />
              <Route path='/app/recs' component={()=><AppPage set_Like_videoes_Cookie={this.set_Like_videoes_Cookie} popup_yet_alert={this.popup_yet_alert} update={this.update_cards_state} cards={this.state.cards} add_like_video={this.add_like_video} />} />
              <Route path='/app/matches' component={()=><MatchesPage onDelete={this.onDelete_video_handler} like_videoes={this.state.like_videoes} />} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <SuperLikeBox is_open={this.state.is_open_yet_Alert} className="Superlike-button_Box" pose={this.state.is_open_yet_Alert?'open':'close'}><SuperLikeAlert is_open={this.state.is_open_yet_Alert} popdown_yet_alert={this.popdown_yet_alert} /></SuperLikeBox>
        </BrowserRouter>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <ForPC />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
