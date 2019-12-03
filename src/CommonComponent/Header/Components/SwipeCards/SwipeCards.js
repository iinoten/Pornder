import React, {Component} from 'react';
import Swipeable from "react-swipy"
import './SwipeCards.css'
import Card from '../Card/Card';

const wrapperStyles = {position: "relative", width: "250px", height: "250px"};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
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
      cards: [
        'one', 'two', 'three'
      ]
    }
  }
  remove = () => {
    console.log(this.state.cards)
    this.setState(prevState => {
      let temp_card_array = prevState.cards;
      temp_card_array.shift();
      temp_card_array.push("five")
      console.log( temp_card_array)
      return { cards: temp_card_array}
    })
  }
  onSwipe_handler = (e) => {
    console.log('swipeeeeeee', e)
  }
  render(){
    console.log(this.state.cards)
    const {cards} = this.state;
    return(
      <div>
        <div style={wrapperStyles}>
          {this.state.cards.length > 0 ? (
            <div style={wrapperStyles}>
              <Swipeable
                onSwipe={this.onSwipe_handler}
                buttons={({left, right}) => (
                  <div style={actionsStyles}>

                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <div className="Swipe-card"><Card Video_title={cards[0]} img_src='https://ci.phncdn.com/videos/201910/02/252356862/original/(m=e0YHGgaaaa)(mh=VUXLIZUoF2OZunpL)12.jpg'>{cards[0]}</Card></div>
              </Swipeable>
              { this.state.cards.length > 1 && cards[1]} }
            </div>
          ) : (
            <div className="Swipe-card"><Card></Card></div>
          )}
        </div>
        <div className="ControllButtons">
          <button className="Rewind-button SubButton" />
          <button className="Dislike-button MainButton" />
          <button className="Superlike-button SubButton" />
          <button className="Like-button MainButton" />
          <button className="Boost-button SubButton" />
        </div>
      </div>
    );
  }
}

export default SwipeCards;