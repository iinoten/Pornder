import React, {Component} from 'react';
import Swipeable from "react-swipy"
import './SwipeCards.css'
import Card from '../Card/Card';
import axios from 'axios';


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
        {
          thumb: 'https://ci.phncdn.com/videos/201705/03/115247951/original/(m=e0YHGgaaaa)(mh=GWwTEvJ3PqgDp4ez)9.jpg',
          video_url: 'https://www.pornhub.com/view_video.php?viewkey=ph590a10806acb3',
          title: 'FUNNY PORN FAILS AND BLOOPERS COMPILATION #9',
          views: 969123,
          rating: 61
        },
        {
          thumb: 'https://ci.phncdn.com/videos/201705/03/115247951/original/(m=e0YHGgaaaa)(mh=GWwTEvJ3PqgDp4ez)9.jpg',
          video_url: 'https://www.pornhub.com/view_video.php?viewkey=ph590a10806acb3',
          title: 'FUNNY PORN FAILS AND BLOOPERS COMPILATION #9',
          views: 969123,
          rating: 61
        },
        {
          title: 'FUNNY PORN FAILS AND BLOOPERS COMPILATION #9',
          video_url: 'https://www.pornhub.com/view_video.php?viewkey=ph590a10806acb3',
          thumb: 'https://ci.phncdn.com/videos/201705/03/115247951/original/(m=e0YHGgaaaa)(mh=GWwTEvJ3PqgDp4ez)9.jpg',
          views: 969123,
          rating: 61
        }
      ]
    }
  }
  remove = () => {
    const GET_VIDEO_FROM_CATEGORY = 'https://stark-dusk-66489.herokuapp.com/c/';
    this.setState(prevData_for_remove => {
      let temp_card_data = prevData_for_remove.cards;
      temp_card_data.shift();
      return {cards: temp_card_data}
    })
    for (let index = 0; index < 5; index++) {
      console.log("swipe and get 5 datas")
      axios.get(GET_VIDEO_FROM_CATEGORY, {params: {category: all_video_genre[Math.floor(Math.random() * all_video_genre.length)]}})
        .then((res) => {
          console.log(all_video_genre[Math.floor(Math.random() * all_video_genre.length)])
          this.setState(prevState => {
            let temp_card_array = prevState.cards;
            temp_card_array.push(res.data)
            return { cards: temp_card_array}
          })
        })
        .catch(err => console.log("えらーー", err))
    }
  }
  onSwipe_handler = (e,card) => {
  }
  render(){
    console.log(this.state.cards[0])
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
                <div className="Swipe-card"><Card Video_title={this.state.cards[0].title} rating={this.state.cards[0].rating} img_src={this.state.cards[0].thumb}/></div>
              </Swipeable>
            </div>
          ) : (
            <div className="Swipe-card"><Card Video_title={"もうないです"}/></div>
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