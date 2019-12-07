import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

const SuperLikeBox = posed.div({
  open: {
    top: '50%'
  },
  close: {
    top: '-50%'
  }
})

const all_video_genre = [
  'Japanese',
  'Mature',
  'Anal',
  'Babe',
  'Amateur',
  'Threesome',
  'MLF',
  'Lesbian',
  'Teen',
  'Big Tits',
  'Popular With Women',
  'Verifined Models',
  '60FPS',
  'Arab',
  'Asian',
  'BBW',
  'Babysitter',
  'Behind The Scenes',
  'Big Ass',
  'Big Dick',
  'Bisexual Male',
  'Blonde',
  'Blowjob',
  'Bondage',
  'Brazilian',
  'British',
  'Brunette',
  'Bukkake',
  'Cartoon',
  'Casting',
  'Celebrity',
  'Closed Captions',
  'College',
  'Compilation',
  'Cosplay',
  'Creampie',
  'Cuckold',
  'Cumshot',
  'Czech',
  'Described Video',
  'DP',
  'Ebony',
  'Euro',
  'Exclusive',
  'Fingering',
  'Fisting',
  'French',
  'Funny',
  'Gangbang',
  'German',
  'Handjob',
  'Hardcore',
  'HD Porn',
  'Hentai',
  'Indian',
  'Interective',
  'Korean',
  'Latina',
  'Massage',
  'Masturbation',
  'Music',
  'Old/Young',
  'Orgy',
  'Parody',
  'Party',
  'Pissing',
  'Pornstar',
  'Public',
  'Pussy Licking',
  'Reality',
  'Red Head',
  'Role Play',
  'School',
  'Scissoring',
  'SFW',
  'SmallTits',
  'Smoking',
  'Solo Female',
  'Squirt',
  'Strap On',
  'Striptease',
  'Tattooed Women',
  'Teen',
  'Toys',
  'Transgender',
  'Vintage',
  'Webcam'
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
      is_open_yet_Alert: false
    }
  }
  add_like_video = (video) => {
    this.setState(prevState => {
      let temp_video_state = prevState.like_videoes;
      temp_video_state.unshift(video);
      return {like_videoes: temp_video_state}
    })
   //this.setState({like_videoes: this.state.like_videoes.concat(video)})
   this.update_test_state()
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
  update_test_state = () => {
    this.setState(prev_card => {
      let temp_cards =  prev_card.cards;
      temp_cards.shift();
      return {cards: temp_cards}
    })
    if(this.state.swipe_count <= 2) {
      this.setState({swipe_count: 5})
      for (let index = 0; index < 5; index++) {
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
    const test_object = {
      foo: 'baa',
      hoge: 'huga',
      ten: 1234
    }
    //Cookieからlikeしたやつをとってくる
    if(Cookies.get().DEMO_like_videoes){
      this.setState({
        like_videoes: JSON.parse(Cookies.get().DEMO_like_videoes)
      })
    }
  }
  set_Like_videoes_Cookie = (videoes) => {
    Cookies.set('DEMO_like_videoes', JSON.stringify([videoes, ...this.state.like_videoes]))
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
      <BrowserRouter>
        <div className='App'>
        <Header menu_state={this.state.menu_state} change_menu_handler={this.change_menu}/>
          <Switch>
            <Route path='/app/profile' component={()=><ProfilePage popup_yet_alert={this.popup_yet_alert} />} />
            <Route path='/app/recs' component={()=><AppPage set_Like_videoes_Cookie={this.set_Like_videoes_Cookie} popup_yet_alert={this.popup_yet_alert} update={this.update_test_state} cards={this.state.cards} add_like_video={this.add_like_video} />} />
            <Route path='/app/matches' component={()=><MatchesPage onDelete={this.onDelete_video_handler} like_videoes={this.state.like_videoes} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <SuperLikeBox is_open={this.state.is_open_yet_Alert} className="Superlike-button_Box" pose={this.state.is_open_yet_Alert?'open':'close'}><SuperLikeAlert is_open={this.state.is_open_yet_Alert} popdown_yet_alert={this.popdown_yet_alert} /></SuperLikeBox>
      </BrowserRouter>
    );
  }
}

export default App;
