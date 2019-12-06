import React, {Component} from 'react';
import Swipeable from "react-swipy"
//import Cards, { Card } from 'react-swipe-card'
import './SwipeCards.css'
import SwipeCard from '../SwipeCard/SwipeCard';
import axios from 'axios';


const wrapperStyles = {position: "relative", width: "250px", height: "250px"};

const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
  now_card: ''
};

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

class SwipeCards extends Component{
  constructor(){
    super();
    this.state = {
      cards: [],
      old_video: {}
    }
  }
  remove = (e ) => {
    this.setState({ now_card: this.state.cards[0] })
  }
  add_like_video = (video) => {
    this.props.add_like_video(video)
  }
  onSwipe_handler = (e,card) => {
    this.props.update();
    if (e==="right") {
      this.add_like_video(this.state.old_video)
    }
  }
  componentDidMount() {
    this.setState({ old_video: this.props.cards[0]})
  }
  push_like_handler = () => {
    this.swipe_right();
  }
  push_dislike_handler = () => {
    this.swipe_left()
  }
  onPush_SuperLike_Button = () => {
    this.props.popup_yet_alert()
  }
  onPush_Rewind_Button = () => {
    this.props.popup_yet_alert()
  }
  onPush_Boost_Button = () => {
    this.props.popup_yet_alert()
  }

  render(){
    return(
      <div>
        <div style={wrapperStyles}>
          {
            this.props.cards ? (this.props.cards.length > 0 ? (
            <div style={wrapperStyles}>
              <Swipeable
                onSwipe={this.onSwipe_handler}
                buttons={({left, right}) => {
                  this.swipe_left = left;
                  this.swipe_right = right
                }}
                onAfterSwipe={this.remove}
              >
                <div className="Swipe-card"><SwipeCard Video_title={this.props.cards[0].title} rating={this.props.cards[0].rating} img_src={this.props.cards[0].thumb}/></div>
              </Swipeable>
            </div>
          ) : (
            <div className="Swipe-card"><SwipeCard Video_title={"次の動画を読み込んでいます"}/></div>
          )
            ): <div className="Swipe-card"><SwipeCard Video_title={"次の動画を読み込んでいます"}/></div>}
        </div>
        <div className="ControllButtons">
          <button onClick={this.onPush_Rewind_Button} className="Rewind-button SubButton" />
          <button onClick={this.push_dislike_handler} className="Dislike-button MainButton" />
          <button onClick={this.onPush_SuperLike_Button} className="Superlike-button SubButton" />
          <button onClick={this.push_like_handler} className="Like-button MainButton" />
          <button onClick={this.onPush_Boost_Button} className="Boost-button SubButton" />
        </div>
      </div>
    );
  }
}

export default SwipeCards;