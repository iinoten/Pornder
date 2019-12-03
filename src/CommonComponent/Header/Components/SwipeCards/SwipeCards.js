import React, {Component} from 'react';
import Swipeable from "react-swipy"
import './SwipeCards.css'
import Card from '../Card/Card';
//import Cards, {Card} from 'react-swipe-card';

const wrapperStyles = {position: "relative", width: "250px", height: "250px"};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
};

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