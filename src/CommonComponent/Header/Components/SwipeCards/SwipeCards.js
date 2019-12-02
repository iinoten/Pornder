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
    this.setState(({cards}) => ({
      cards: cards.slice(1, cards.length),
    }));
    this.setState(({cards}) => ({
      cards: cards.slice(1, cards.length),
    }));
  }
  render(){
    const {cards} = this.state;
    return(
      <div>
        <div style={wrapperStyles}>
          {this.state.cards.length > 0 ? (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({left, right}) => (
                  <div style={actionsStyles}>

                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <div className="Swipe-card"><Card Video_title={"Fuck'n Myself In The Shower"} img_src='https://ci.phncdn.com/videos/201910/02/252356862/original/(m=e0YHGgaaaa)(mh=VUXLIZUoF2OZunpL)12.jpg'>abcd</Card></div>
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