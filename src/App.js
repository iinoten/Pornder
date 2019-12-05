import logo from './logo.svg';
import './App.css';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import AppPage from './Corepage/AppPage/AppPage';
import Header from './CommonComponent/Header/Header';
import ProfilePage from './Corepage/ProfilePage/ProfilePage';
import MatchesPage from './Corepage/MatchesPage/MatchesPage';

import React, {Component} from 'react';

import './App.css'

class App extends Component{
  constructor() {
    super();
    this.state = {
      menu_state: 'recs',
      like_videoes: []
    }
  }
  add_like_video = (video) => {
    /*
    this.setState(prevState => {
      let temp_video_state = prevState.like_videoes;
      console.log(temp_video_state)
      temp_video_state.push(video);
      return {like_videoes: temp_video_state}
    })
    console.log(this.state.like_videoes)
    */
   console.log("do the add_like_video", video)
   this.setState({like_videoes: this.state.like_videoes.concat(video)})
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
  }
  render(){
    return (
      <BrowserRouter>
        <div className='App'>
        <Header menu_state={this.state.menu_state} change_menu_handler={this.change_menu}/>
          <Switch>
            <Route path='/app/profile' component={()=><ProfilePage />} />
            <Route path='/app/recs' component={()=><AppPage add_like_video={this.add_like_video} />} />
            <Route path='/app/matches' component={()=><MatchesPage like_videoes={this.state.like_videoes} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
